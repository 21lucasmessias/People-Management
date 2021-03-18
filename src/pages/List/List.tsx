import React, { useContext, useEffect, useState } from 'react';

import { ListContext } from '../../contexts/ListContext';

import { useQuery } from '@apollo/client';
import { GET_PERSONS } from '../../GraphQL/query';

import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather'

import Card from '../../components/Card/Card';

import { iPerson, iStack, serverResponsePerson } from '../../types';
import { StackScreenProps } from '@react-navigation/stack';

import {
  Container,
  FlatList,
  Text,
  FilterView,
  TouchableOpacity
} from './List.styles';
import { SharedElement } from 'react-navigation-shared-element';


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

  useEffect(() => {
    setClient(client);
  }, [client])

  return (
    <Container>
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