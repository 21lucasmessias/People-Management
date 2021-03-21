import React, { useContext } from 'react';
import { AlterContext } from '../../../contexts/AlterContext';
import { iCEP } from '../../../GraphQL/apolloComponents';
import { Alert } from 'react-native';

import { Container, Info, TextInput } from './InfoWrapper.styles';

const InfoWrapper: React.FC = () => {
  const {
    RG,
    setRG,
    RGError,
    CPF,
    setCPF,
    CPFError,
    CEP,
    setCEP,
    CEPError,
    setCEPError,
    adressNumber,
    setAdressNumber,
    adressNumberError,
    city,
    setCity,
    adressState,
    setAdressState,
    district,
    setDistrict,
    street,
    setStreet,
    verifyCEP
  } = useContext(AlterContext);

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
    <Container>
      <Info>
        <TextInput
          label="RG"
          value={RG}
          onChangeText={text => setRG(text)}
          error={RGError}
          style={{ backgroundColor: "rgb(242,242,242)" }}
          theme={{ colors: { primary: "#476A6F" } }}
        />
        <TextInput
          label="CPF"
          value={CPF}
          onChangeText={text => setCPF(text)}
          error={CPFError}
          style={{ backgroundColor: "rgb(242,242,242)" }}
          theme={{ colors: { primary: "#476A6F" } }}
        />
      </Info>

      <Info>
        <TextInput
          label="CEP"
          value={CEP}
          onChangeText={text => setCEP(text)}
          error={CEPError}
          style={{ backgroundColor: "rgb(242,242,242)" }}
          theme={{ colors: { primary: "#476A6F" } }}
          onEndEditing={handleCEPChange}
        />
        <TextInput
          label="Number"
          value={adressNumber}
          onChangeText={text => setAdressNumber(text)}
          error={adressNumberError}
          style={{ backgroundColor: "rgb(242,242,242)" }}
          theme={{ colors: { primary: "#476A6F" } }}
        />
      </Info>

      <Info>
        <TextInput
          label="City"
          value={city}
          style={{ backgroundColor: "rgb(242,242,242)" }}
          disabled
        />
        <TextInput
          label="State"
          value={adressState}
          style={{ backgroundColor: "rgb(242,242,242)" }}
          disabled
        />
      </Info>

      <Info>
        <TextInput
          label="District"
          value={district}
          style={{ backgroundColor: "rgb(242,242,242)" }}
          disabled
        />
        <TextInput
          label="Street"
          value={street}
          style={{ backgroundColor: "rgb(242,242,242)" }}
          disabled
        />
      </Info>
    </Container>
  );
}

export default InfoWrapper;