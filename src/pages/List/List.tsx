import React, { useContext } from 'react';

import { Button } from 'react-native-paper';
import { StackScreenProps } from '@react-navigation/stack';

import Card from '../../components/Card/Card';

import { iPerson, iPersons, iStack } from '../../GraphQL/apolloComponents';
import { ListContext } from '../../contexts/ListContext';

import {
  Container,
  FlatList,
  Text,
  FilterView
} from './List.styles';

type Props = StackScreenProps<iStack, 'List'>;

const List: React.FC<Props> = ({ navigation }) => {
  const { data, loading, error, fetchMore, refetch } = useContext(ListContext);

  const endReachedHandle = () => {
    fetchMore({
      variables: {
        limit: 5,
        offset: data ? data.persons.length : 0
      },
      updateQuery: (prev: iPersons, { fetchMoreResult }: any) => {
        if (!fetchMoreResult) return prev;

        return Object.assign({}, prev, {
          persons: [...prev.persons, ...(fetchMoreResult as iPersons).persons]
        });
      }
    })
  }

  return (
    <Container>
      <FilterView>
        <Button mode='outlined' onPress={() => refetch({ limit: 5, offset: 0 })}>
          <Text>Refresh</Text>
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