import React, { useContext, useState } from 'react';

import { Button } from 'react-native-paper';

import Card from '../../components/Card/Card';

import { iPerson, iPersons, iStack, usePersonsQuery } from '../../GraphQL/apolloComponents';
import { StackScreenProps } from '@react-navigation/stack';

import {
  Container,
  FlatList,
  Text,
  FilterView
} from './List.styles';

type Props = StackScreenProps<iStack, 'List'>;

const List: React.FC<Props> = ({ navigation }) => {
  const [sortField, setSortField] = useState<string>("name.first");
  const [offSet, setOffSet] = useState(0);

  const {
    error,
    loading,
    data,
    fetchMore,
    refetch,
  } = usePersonsQuery({
    variables: {
      sortField: sortField,
      limit: 5,
      offset: offSet,
    },
  });

  const endReachedHandle = () => {
    fetchMore({
      variables: {
        offset: data ? data.persons.length : 0
      },
      updateQuery: (prev: iPersons, { fetchMoreResult }: any) => {
        if (!fetchMoreResult) return prev;

        return Object.assign({}, prev, {
          feed: [...prev.persons, ...(fetchMoreResult as iPersons).persons]
        });
      }
    })
  }

  const filterButtonHandle = (field: string) => {
    refetch({ sortField: field, limit: 5, offset: 0 });
  }

  return (
    <Container>
      <Text>Order by</Text>

      <FilterView>
        <Button mode='outlined' onPress={() => filterButtonHandle("name.first")}>
          <Text>Name</Text>
        </Button>

        <Button mode='outlined' onPress={() => filterButtonHandle("cpf")}>
          <Text>CPF</Text>
        </Button>

        <Button mode='outlined' onPress={() => filterButtonHandle("birthday")}>
          <Text>Age</Text>
        </Button>
      </FilterView>

      {loading ? (
        <Text>Loading</Text>
      ) : (
        error ? (
          <Text>Error</Text>
        ) : (
          <FlatList
            data={data ? data.persons : []}
            renderItem={({ item }) => (
              <Card navigation={navigation} person={item as iPerson} />
            )}
            keyExtractor={(_, index) => index.toString()}
            refreshing
            showsVerticalScrollIndicator={false}
            onEndReached={endReachedHandle}
          />
        )
      )}
    </Container>
  );
}

export default List;