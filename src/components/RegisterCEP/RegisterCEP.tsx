import React, { useContext } from 'react';
import { RegisterContext } from '../../contexts/RegisterContext';

import { Alert } from 'react-native';

import { iCEP } from '../../GraphQL/apolloComponents';

import { AdressView, TextInput, LabelInput } from './RegisterCEP.styles';

const RegisterCEP: React.FC = () => {
  const {
    CEP,
    setCEP,
    CEPError,
    setCEPError,
    adressNumber,
    setAdressNumber,
    city,
    setCity,
    adressState,
    setAdressState,
    street,
    setStreet,
    setDistrict,
    adressNumberError,
    verifyCEP
  } = useContext(RegisterContext);

  const setCEPInfo = (info: iCEP | undefined) => {
    if (info) {
      setDistrict(info.bairro);
      setCity(info.localidade);
      setStreet(info.logradouro);
      setAdressState(info.uf);
    } else {
      setDistrict('');
      setCity('');
      setStreet('');
      setAdressState('');
    }
  }

  const handleCEPChange = () => {
    if (verifyCEP()) {
      fetch(`https://viacep.com.br/ws/${CEP.replace(/\D/g, '')}/json/`)
        .then((res) => {
          res.json().then((res: iCEP | undefined) => {
            setCEPInfo(res);
          });
        })
    } else {
      setCEPError(true);
      setCEPInfo(undefined);

      Alert.alert('CEP', 'Invalid CEP', [{ text: "OK" }], { cancelable: false });
    }
  }

  return (
    <>
      <LabelInput>Adress</LabelInput>

      <AdressView>
        <TextInput
          label="CEP"
          value={CEP}
          onChangeText={text => setCEP(text)}
          error={CEPError}
          style={{ backgroundColor: "rgb(242,242,242)", width: '45%' }}
          theme={{ colors: { primary: "#476A6F" } }}
          onEndEditing={handleCEPChange}
        />
        <TextInput
          label="Number"
          value={adressNumber}
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
          style={{ backgroundColor: "rgb(242,242,242)", width: '45%' }}
          disabled
        />
        <TextInput
          label="State"
          value={adressState}
          style={{ backgroundColor: "rgb(242,242,242)", width: '45%' }}
          disabled
        />
      </AdressView>

      <TextInput
        label="Street"
        value={street}
        style={{ backgroundColor: "rgb(242,242,242)" }}
        disabled
      />
    </>
  );
}

export default RegisterCEP;