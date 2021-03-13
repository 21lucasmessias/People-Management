import React from 'react';
import Header from '../../components/Header/Header';

import {
  Container,
  Text
} from './Register.styles';

const Register: React.FC = () => {
  return (
    <Container>
      <Header title="Register" />
      <Text>Register</Text>
    </Container>
  );
}

export default Register;