import React, { useState } from 'react';

import { useQuery, resetCaches } from '@apollo/client';
import { GET_PERSONS } from '../../GraphQL/query';

import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';

import { iPeople, serverResponsePeople } from '../../types';

import {
  Container,
  FlatList,
  Text,
} from './List.styles';
import { Button } from 'react-native-paper';

const List: React.FC = () => {
  const [sortField, setSortField] = useState<[string | number]>(["name"]);

  const { error, loading, data, fetchMore, client } = useQuery(GET_PERSONS, {
    variables: {
      sortField: sortField,
      limit: 2,
      offset: 0,
    }
  });

  if (loading) {
    return (
      <Container>
        <Header title="Our People" />
        <Text>Loading</Text>
      </Container>
    );
  }

  if (error) {
    console.log(error);
    return (
      <Container>
        <Header title="Our People" />
        <Text>Error</Text>
      </Container>
    );
  }

  const endReachedHandle = () => {
    fetchMore({
      variables: {
        offset: (data as serverResponsePeople).persons.length
      }
    })
  }

  return (
    <Container>
      <Header title="Our People" />
      <Button onPress={() => {
        setSortField(["name"]);
        client.cache.reset();
      }}>Name</Button>
      <Button onPress={() => {
        setSortField(["cpf"]);
        client.cache.reset();
      }}>CPF</Button>
      <Button onPress={() => {
        //setSortField(["birthday"]);
        //client.cache.reset();
      }}>Age</Button>

      <FlatList
        data={data ? (data as serverResponsePeople).persons : []}

        renderItem={({ item }) => (<Card person={item as iPeople} />)}

        keyExtractor={(_, index) => index.toString()}

        refreshing
        showsVerticalScrollIndicator={false}

        onEndReached={endReachedHandle}
      />
    </Container>
  );
}

export default List;