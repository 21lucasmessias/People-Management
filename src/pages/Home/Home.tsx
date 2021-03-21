import React, { useContext } from 'react';

import StatisticsContextProvider, { StatisticsContext } from '../../contexts/StatisticsContext';

import Header from '../../components/Header/Header';
import Pie from '../../components/Statistics/Pie/Pie';

import {
  Container
} from './Home.styles';

const Home: React.FC = () => {
  const { data } = useContext(StatisticsContext);

  return (
    <StatisticsContextProvider>
      <Header title="Statistics" />
      <Container>
        <Pie />
      </Container>
    </StatisticsContextProvider>
  );
}

export default Home;