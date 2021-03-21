import React, { useContext, useEffect, useState } from 'react';
import { RefreshControl, Text } from 'react-native';

import { PieChart, PieChartData } from 'react-native-svg-charts'
import { StatisticsContext } from '../../../contexts/StatisticsContext';
import Legend, { iData } from '../Legend/Legend';

import {
  Container,
  Title,
} from './Pie.styles';

const Pie: React.FC = () => {
  const { data, loading, error, refetch } = useContext(StatisticsContext);
  const [refreshing, setRefreshing] = useState(false);

  if (loading) {
    return (
      <Container><Text style={{ color: 'black' }}>Loading</Text></Container>
    )
  }

  if (error) {
    return (
      <Container><Text style={{ color: 'black' }}>Error</Text></Container>
    )
  }

  const randomColor = () => ('#' + (Math.random() * 0xFFFFFF << 0).toString(16) + '000000').slice(0, 7);

  const transformToAge = (birthday: number) => {
    var today = new Date();
    return Math.floor(((today.getDate() + (today.getMonth() + 1) * 30 + today.getFullYear() * 365) - birthday) / 365);
  }

  const dataSetup = (list: number[]) => {
    let map = new Map<number, number>();

    list.forEach((item) => {
      let collection = map.get(item);

      if (!collection) {
        map.set(item, 1);
      } else {
        map.set(item, collection + 1);
      }
    });

    let data: iData[] = []

    map.forEach((value, key) => {
      data.push({ data: value, label: key, color: randomColor() })
    })

    return data;
  }

  const refetchPie = () => {
    setRefreshing(true);
    refetch().then(() => {
      setRefreshing(false);
    });
  }

  return (
    <Container
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={refetchPie}
        />
      }
    >
      <Title>Age</Title>
      <Legend data={dataSetup(data!.statistics.map((statistic) => transformToAge(statistic.birthday * -1)))} />

      <PieChart
        data={dataSetup(data!.statistics.map((statistic) => transformToAge(statistic.birthday * -1))).map<PieChartData>((statistic, index) => ({
          value: statistic.data,
          svg: {
            fill: statistic.color,
          },
          key: `pie-${index}`
        }))}
        style={{ height: 300, width: 300 }}
        labelRadius={80}
      />
    </Container>
  );
}

export default Pie;