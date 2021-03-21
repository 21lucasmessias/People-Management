import React, { useContext, useState } from 'react';

import { Button } from 'react-native-paper';
import { StackScreenProps } from '@react-navigation/stack';

import Card from '../../components/List/Card/Card';

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
  const [isLoading, setIsLoading] = useState(false);

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
            showsVerticalScrollIndicator={false}
            onEndReached={endReachedHandle}
            refreshing={isLoading}
            onRefresh={() => {
              setIsLoading(true);

              refetch({ limit: 5, offset: 0 }).then(() => {
                setIsLoading(false);
              });
            }}
          />
        )
      )}
    </Container>
  );
}

export default List;