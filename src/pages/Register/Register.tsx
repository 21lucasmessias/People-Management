import React from 'react';

import RegisterContextProvider from '../../contexts/RegisterContext';

import Header from '../../components/Header/Header';
import RegisterCEP from '../../components/RegisterCEP/RegisterCEP';
import RegisterProfile from '../../components/RegisterProfile/RegisterProfile';
import RegisterButtons from '../../components/RegisterButtons/RegisterButtons';

import {
  Container,
  Form,
  Section
} from './Register.styles';

const Register: React.FC = () => {

  return (
    <RegisterContextProvider>
      <Container>
        <Header title="Register" />
        <Form>
          <Section>
            <RegisterProfile />
          </Section>

          <Section>
            <RegisterCEP />
          </Section>

          <RegisterButtons />
        </Form>
      </Container>
    </RegisterContextProvider>
  );
}

export default Register;