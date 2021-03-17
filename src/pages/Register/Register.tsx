import React, { useState } from 'react';
import { Alert } from 'react-native';

import { useMutation } from '@apollo/client';
import { REGISTER_PERSON } from '../../GraphQL/mutation';

import Header from '../../components/Header/Header';
import DatePicker from '../../components/DatePicker/DatePicker';

import { iCEP } from '../../types';

import {
  Container,
  Form,
  Section,
  NameView,
  AdressView,
  LabelInput,
  TextInput,
  ButtonsView,
  Button,
} from './Register.styles';

const Register: React.FC = () => {
  const [nameFirst, setNameFirst] = useState('');
  const [nameFirstError, setNameFirstError] = useState(false);

  const [nameLast, setNameLast] = useState('');
  const [nameLastError, setNameLastError] = useState(false);

  const [date, setDate] = useState<Date | null>(null);
  const [dateError, setDateError] = useState(false);
  const [showDate, setShowDate] = useState(false);

  const [CPF, setCPF] = useState('');
  const [CPFError, setCPFError] = useState(false);

  const [RG, setRG] = useState('');
  const [RGError, setRGError] = useState(false);

  const [CEP, setCEP] = useState('');
  const [CEPError, setCEPError] = useState(false);
  const [adressNumber, setAdressNumber] = useState('');
  const [adressNumberError, setAdressNumberError] = useState(false);
  const [street, setStreet] = useState('');
  const [district, setDistrict] = useState('');
  const [city, setCity] = useState('');
  const [adressState, setAdressState] = useState('');

  const [formPerson, { data }] = useMutation(REGISTER_PERSON);

  const verifyCEP = () => {
    var cep = CEP.replace(/\D/g, '');

    if (cep != "") {
      var regExpCEP = /^[0-9]{8}$/;

      return regExpCEP.test(cep);
    }

    return false;
  }

  const handleClearInputs = () => {
    setNameFirst('');
    setNameFirstError(false);
    setNameLast('');
    setNameLastError(false);
    setDate(null);
    setDateError(false);
    setShowDate(false);
    setCPF('');
    setCPFError(false);
    setRG('');
    setRGError(false);
    setCEP('');
    setCEPError(false);
    setStreet('');
    setAdressNumber('');
    setAdressNumberError(false);
    setDistrict('');
    setCity('');
    setAdressState('');
  }

  const verifyEmptyFields = () => {
    setNameFirstError(!nameFirst);
    setNameLastError(!nameLast);
    setDateError(!date);
    setCPFError(!CPF);
    setRGError(!RG);
    setCEPError(!verifyCEP() || !CEP);
    setAdressNumberError(!adressNumber);

    return !nameFirst || !nameLast || !date || !CPF || !RG || (!verifyCEP() || !CEP) || !adressNumber;
  }

  const handleCEPChange = () => {

    if (verifyCEP()) {
      setCEPError(false);

      fetch(`https://viacep.com.br/ws/${CEP.replace(/\D/g, '')}/json/`)
        .then((res) => {
          res.json().then((res: iCEP | undefined) => {
            if (res) {
              setDistrict(res.bairro);
              setCity(res.localidade);
              setStreet(res.logradouro);
              setAdressState(res.uf);
            } else {
              setDistrict('');
              setCity('');
              setStreet('');
              setAdressState('');
            }
          });
        })
    } else {
      setCEPError(true);
      setDistrict('');
      setCity('');
      setStreet('');
      setAdressState('');

      Alert.alert('CEP', 'Invalid CEP', [{ text: "OK" }], { cancelable: false });
    }
  }

  const handleConfirmInputs = () => {
    let alertMessage = 'Registry problems!';

    if (!verifyEmptyFields()) {
      formPerson({
        variables: {
          name: {
            first: nameFirst,
            last: nameLast
          },
          birthday: {
            day: date?.getDate(),
            month: date?.getMonth(),
            year: date?.getFullYear()
          },
          cpf: CPF,
          rg: RG,
          adress: {
            street: street,
            number: adressNumber,
            district: district,
            city: city,
            state: adressState,
            cep: CEP
          }
        }
      });

      alertMessage = 'Successfully registered!';

      handleClearInputs();
    }

    Alert.alert('Registration', alertMessage, [{ text: "Cancel", style: "cancel" }, { text: "OK" }], { cancelable: false });
  }

  return (
    <Container>
      <Header title="Register" />
      <Form>
        <Section>
          <LabelInput>Profile</LabelInput>

          <NameView>
            <TextInput
              label="First Name"
              value={nameFirst}
              keyboardType='default'
              onChangeText={text => setNameFirst(text)}
              error={nameFirstError}
              style={{ backgroundColor: "rgb(242,242,242)" }}
              theme={{ colors: { primary: "#476A6F" } }}
            />
            <TextInput
              label="Last Name"
              value={nameLast}
              keyboardType='default'
              onChangeText={text => setNameLast(text)}
              error={nameLastError}
              style={{ backgroundColor: "rgb(242,242,242)" }}
              theme={{ colors: { primary: "#476A6F" } }}
            />
          </NameView>

          <DatePicker dateError={dateError} date={date} setDate={setDate} showDate={showDate} setShowDate={setShowDate} />

          <TextInput
            label="CPF"
            value={CPF}
            keyboardType='numeric'
            onChangeText={text => setCPF(text)}
            error={CPFError}
            style={{ backgroundColor: "rgb(242,242,242)" }}
            theme={{ colors: { primary: "#476A6F" } }}
          />
          <TextInput
            label="RG"
            value={RG}
            keyboardType='numeric'
            onChangeText={text => setRG(text)}
            error={RGError}
            style={{ backgroundColor: "rgb(242,242,242)" }}
            theme={{ colors: { primary: "#476A6F" } }}
          />
        </Section>

        <Section>
          <LabelInput>Adress</LabelInput>

          <AdressView>
            <TextInput
              label="CEP"
              value={CEP}
              keyboardType='numeric'
              onChangeText={text => setCEP(text)}
              error={CEPError}
              style={{ backgroundColor: "rgb(242,242,242)", width: '45%' }}
              theme={{ colors: { primary: "#476A6F" } }}
              onEndEditing={handleCEPChange}
            />
            <TextInput
              label="Number"
              value={adressNumber}
              keyboardType='numeric'
              onChangeText={text => setAdressNumber(text)}
              error={adressNumberError}
              style={{ backgroundColor: "rgb(242,242,242)", width: '45%' }}
              theme={{ colors: { primary: "#476A6F" } }}
            />
          </AdressView>

          <AdressView>
            <TextInput
              label="City"
              value={city}
              keyboardType='numeric'
              style={{ backgroundColor: "rgb(242,242,242)", width: '45%' }}
              disabled
            />
            <TextInput
              label="State"
              value={adressState}
              keyboardType='numeric'
              style={{ backgroundColor: "rgb(242,242,242)", width: '45%' }}
              theme={{ colors: { primary: "#476A6F" } }}
              disabled
            />
          </AdressView>

          <TextInput
            label="Street"
            value={street}
            keyboardType='numeric'
            style={{ backgroundColor: "rgb(242,242,242)" }}
            disabled
          />
        </Section>

        <ButtonsView>
          <Button mode="contained" onPress={handleClearInputs}>Clear</Button>
          <Button mode="contained" onPress={handleConfirmInputs}>Confirm</Button>
        </ButtonsView>
      </Form>
    </Container>
  );
}

export default Register;