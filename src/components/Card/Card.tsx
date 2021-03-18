import React from 'react';

import { Image } from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack'
import { SharedElement } from 'react-navigation-shared-element';

import TextContainer from '../TextContainer/TextContainer';

import {
  Touchable,
  Container,
  Info,
  AgeCPF
} from './Card.styles'


import { iPerson, iStack } from '../../types';

type iCard = {
  person: iPerson,
  navigation: StackNavigationProp<iStack, "List">
}

const Card: React.FC<iCard> = ({ person, navigation }) => {
  const transformToAge = (birthday: number) => {
    var today = new Date();
    return Math.floor(((today.getDate() + (today.getMonth() + 1) * 30 + today.getFullYear() * 365) - birthday) / 365);
  }

  const handleOpenPerson = () => {
    navigation.push('Details', { person });
  }

  return (
    <Touchable onPress={handleOpenPerson}>
      <Container>
        <SharedElement id={`photo${person.cpf}`} >
          <Image source={{ uri: 'https://github.com/21lucasmessias.png' }} style={{ width: 80, height: 80, borderRadius: 100, marginVertical: 15 }} />
        </SharedElement>
        <Info>
          <SharedElement id={`name${person.cpf}`}>
            <TextContainer title='Name' message={`${person.name.first} ${person.name.last}`} />
          </SharedElement>
          <AgeCPF>
            <SharedElement id={`age${person.cpf}`}>
              <TextContainer title='Age' message={transformToAge(person.birthday).toString()} />
            </SharedElement>
            <TextContainer title='CPF' message={person.cpf} />
          </AgeCPF>
        </Info>
      </Container>

    </Touchable>
  );
}

export default Card;