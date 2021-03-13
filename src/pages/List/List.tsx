import React from 'react';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';

import { people } from '../../../people';
import { iPeople } from '../../types';

import {
  Container,
  FlatList,
} from './List.styles';

const List: React.FC = () => {
  return (
    <Container>
      <Header title="Our People" />
      <FlatList
        data={people}
        renderItem={({ item }) => (
          <Card person={item as iPeople} />
        )}
        keyExtractor={(_, index) => index.toString()}
        refreshing
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}

export default List;