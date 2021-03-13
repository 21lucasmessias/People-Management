import React from 'react';
import Header from '../../components/Header/Header';

import {
  Container,
  Text,
} from './Home.styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header title="Statistics" />
      <Text>Teste</Text>
    </Container>
  );
}

export default Home;