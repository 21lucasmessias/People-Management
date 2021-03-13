import React from 'react';
import Header from '../../components/Header/Header';

import {
  Container,
  Text
} from './List.styles';

const List: React.FC = () => {
  return (
    <Container>
      <Header title="Our People" />
      <Text>
        List
      </Text>
    </Container>
  );
}

export default List;