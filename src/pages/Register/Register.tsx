import React from 'react';

import RegisterContextProvider from '../../contexts/RegisterContext';

import Header from '../../components/Header/Header';
import RegisterCEP from '../../components/Register/RegisterCEP/RegisterCEP';
import RegisterProfile from '../../components/Register/RegisterProfile/RegisterProfile';
import RegisterButtons from '../../components/Register/RegisterButtons/RegisterButtons';

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