import React, { useContext, useEffect, useState } from 'react';

import { ListContext } from '../../contexts/ListContext';

import { useQuery } from '@apollo/client';
import { GET_PERSONS } from '../../GraphQL/query';

import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import { Button } from 'react-native-paper';

import { iPerson, serverResponsePerson } from '../../types';

import {
  Container,
  FlatList,
  Text,
  FilterView
} from './List.styles';

const List: React.FC = () => {
  const [sortField, setSortField] = useState<[string | number]>(["name"]);

  const { error, loading, data, fetchMore, client } = useQuery(GET_PERSONS, {
    variables: {
      sortField: sortField,
      limit: 2,
      offset: 0,
    }
  });

  const { setClient } = useContext(ListContext);

  useEffect(() => {
    setClient(client);
  }, [client])

  const endReachedHandle = () => {
    fetchMore({
      variables: {
        offset: (data as serverResponsePerson).persons.length
      }
    })
  }

  return (
    <Container>
      <Header title="Our People" />
      <Text>Order by</Text>

      <FilterView>
        <Button mode='outlined' onPress={() => {
          setSortField(["name"]);
          client.cache.reset();
        }}>
          <Text>Name</Text>
        </Button>

        <Button mode='outlined' onPress={() => {
          setSortField(["cpf"]);
          client.cache.reset();
        }}>
          <Text>CPF</Text>
        </Button>

        <Button mode='outlined' onPress={() => {
          setSortField(["birthday"]);
          client.cache.reset();
        }}>
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
            data={data ? (data as serverResponsePerson).persons : []}
            renderItem={({ item }) => (
              <Card person={item as iPerson} />
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