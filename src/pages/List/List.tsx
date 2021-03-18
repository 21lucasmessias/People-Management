import React, { useContext, useEffect, useState } from 'react';

import { ListContext } from '../../contexts/ListContext';

import { useQuery } from '@apollo/client';
import { GET_PERSONS } from '../../GraphQL/query';

import { Button } from 'react-native-paper';

import Card from '../../components/Card/Card';

import { iPerson, iStack, serverResponsePerson } from '../../types';
import { StackScreenProps } from '@react-navigation/stack';

import {
  Container,
  FlatList,
  Text,
  FilterView
} from './List.styles';

type Props = StackScreenProps<iStack, 'List'>;

const List: React.FC<Props> = ({ navigation }) => {
  const { setClient } = useContext(ListContext);
  const [sortField, setSortField] = useState<[string | number]>(["name"]);

  const { error, loading, data, fetchMore, client } = useQuery(GET_PERSONS, {
    variables: {
      sortField: sortField,
      limit: 2,
      offset: 0,
    }
  });

  const endReachedHandle = () => {
    fetchMore({
      variables: {
        offset: (data as serverResponsePerson).persons.length
      }
    })
  }

  const filterButtonHandle = (field: string) => {
    setSortField([field]);
    client.cache.reset();
  }

  useEffect(() => {
    setClient(client);
  }, [client])

  return (
    <Container>
      <Text>Order by</Text>

      <FilterView>
        <Button mode='outlined' onPress={() => filterButtonHandle("name")}>
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
            data={data ? (data as serverResponsePerson).persons : []}
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