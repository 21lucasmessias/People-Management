import React, { useContext } from 'react';

import { Image, Text } from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack'
import { SharedElement } from 'react-navigation-shared-element';

import TextContainer from '../TextContainer/TextContainer';

import {
  Touchable,
  Container,
  Info,
  AgeCPF
} from './Card.styles'

import { iPerson, iStack } from '../../GraphQL/apolloComponents';
import { AlterContext } from '../../contexts/AlterContext';

type iCard = {
  person: iPerson,
  navigation: StackNavigationProp<iStack, "List">,
}

const Card: React.FC<iCard> = ({ person, navigation }) => {
  const {
    setID,
    setCEP,
    setAdressNumber,
    setCity,
    setAdressState,
    setStreet,
    setDistrict,
    setNameFirst,
    setNameLast,
    setBirthday,
    setCPF,
    setRG,
    setDate
  } = useContext(AlterContext);

  const transformToAge = (birthday: number) => {
    var today = new Date();
    return Math.floor(((today.getDate() + (today.getMonth() + 1) * 30 + today.getFullYear() * 365) - birthday) / 365);
  }

  const handleOpenPerson = () => {
    setID(person.id);
    setCEP(person.adress.cep);
    setAdressNumber(person.adress.number);
    setCity(person.adress.city);
    setAdressState(person.adress.state);
    setStreet(person.adress.street);
    setDistrict(person.adress.district);
    setNameFirst(person.name.first);
    setNameLast(person.name.last);
    setBirthday(person.birthday);
    setCPF(person.cpf);
    setRG(person.rg);
    setDate(new Date(Math.floor(person.birthday * -1 / 365), Math.floor(person.birthday * -1 % 365 / 30), Math.floor(person.birthday * -1 % 365 % 30)));
    navigation.navigate('Details', { person });
  }

  return (
    <Touchable onPress={handleOpenPerson}>
      <Container>
        <SharedElement id={`photo${person.cpf}`} >
          <Image source={{ uri: 'https://github.com/21lucasmessias.png' }} style={{ width: 80, height: 80, borderRadius: 100, marginVertical: 15 }} />
        </SharedElement>
        <Info>
          <TextContainer title='Name' message={`${person.name.first} ${person.name.last}`} />
          <AgeCPF>
            <TextContainer title='Age' message={transformToAge(person.birthday * -1).toString()} />
            <TextContainer title='CPF' message={person.cpf} />
          </AgeCPF>
        </Info>
      </Container>

    </Touchable>
  );
}

export default Card;