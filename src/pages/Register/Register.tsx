import React from 'react';
import Header from '../../components/Header/Header';

import {
  Container,
  Form,
  Section,
  CityState,
  Label,
  TextInput,
  Buttons,
  Button
} from './Register.styles';

const Register: React.FC = () => {
  const [name, setName] = React.useState('');
  const [nameError, setNameError] = React.useState(false);

  const [age, setAge] = React.useState('');
  const [ageError, setAgeError] = React.useState(false);

  const [cpf, setCPF] = React.useState('');
  const [cpfError, setCPFError] = React.useState(false);


  return (
    <Container>
      <Header title="Register" />
      <Form>
        <Section>
          <Label>Profile</Label>
          <TextInput
            label="Name"
            value={name}
            keyboardType='default'
            onChangeText={text => setName(text)}
            error={nameError}
            style={{ backgroundColor: "rgb(242,242,242)" }}
            theme={{ colors: { primary: "#476A6F" } }}
          />
          <TextInput
            label="Age"
            value={age}
            keyboardType='numeric'
            onChangeText={age => setAge(age)}
            error={ageError}
            style={{ backgroundColor: "rgb(242,242,242)" }}
            theme={{ colors: { primary: "#476A6F" } }}
          />
          <TextInput
            label="CPF"
            value={cpf}
            keyboardType='numeric'
            onChangeText={cpf => setCPF(cpf)}
            error={cpfError}
            style={{ backgroundColor: "rgb(242,242,242)" }}
            theme={{ colors: { primary: "#476A6F" } }}
          />
          <TextInput
            label="RG"
            value={cpf}
            keyboardType='numeric'
            onChangeText={cpf => setCPF(cpf)}
            error={cpfError}
            style={{ backgroundColor: "rgb(242,242,242)" }}
            theme={{ colors: { primary: "#476A6F" } }}
          />
        </Section>
        <Section>
          <Label>Adress</Label>
          <TextInput
            label="CEP"
            value={cpf}
            keyboardType='numeric'
            onChangeText={cpf => setCPF(cpf)}
            error={cpfError}
            style={{ backgroundColor: "rgb(242,242,242)" }}
            theme={{ colors: { primary: "#476A6F" } }}
          />
          <CityState>
            <TextInput
              label="City"
              value={cpf}
              keyboardType='numeric'
              onChangeText={cpf => setCPF(cpf)}
              error={cpfError}
              style={{ backgroundColor: "rgb(242,242,242)", width: '45%' }}
              disabled
            />
            <TextInput
              label="State"
              value={cpf}
              keyboardType='numeric'
              onChangeText={cpf => setCPF(cpf)}
              error={cpfError}
              style={{ backgroundColor: "rgb(242,242,242)", width: '45%' }}
              theme={{ colors: { primary: "#476A6F" } }}
              disabled
            />
          </CityState>
        </Section>
        <Buttons>
          <Button mode="contained" onPress={() => { }}>Clear</Button>
          <Button mode="contained" onPress={() => { }}>Confirm</Button>
        </Buttons>
      </Form>
    </Container>
  );
}

export default Register;