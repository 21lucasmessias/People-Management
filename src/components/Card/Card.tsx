import React from 'react';

import {
  Container,
  TextContainer,
  Text,
  TextInfo,
  Photo,
  Info,
  AgeCPF
} from './Card.styles'

import { iPeople } from '../../types';

type iCard = {
  person: iPeople
}

const Card: React.FC<iCard> = ({ person }) => {

  const transformToAge = (year: number, month: number, day: number) => {
    var today = new Date();
    var birthday = new Date(year, month, day);
    var age = today.getFullYear() - birthday.getFullYear();
    var m = today.getMonth() - birthday.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
      age--;
    }

    return age;
  }

  return (
    <Container>
      <Photo source={{ uri: 'https://github.com/21lucasmessias.png' }} />
      <Info>
        <TextContainer>
          <Text>Name</Text>
          <TextInfo>{`${person.name.first} ${person.name.last}`}</TextInfo>
        </TextContainer>
        <AgeCPF>
          <TextContainer>
            <Text>Age</Text>
            <TextInfo>{transformToAge(person.birthday.year, person.birthday.month, person.birthday.day)}</TextInfo>
          </TextContainer>
          <TextContainer>
            <Text>CPF</Text>
            <TextInfo>{person.cpf}</TextInfo>
          </TextContainer>
        </AgeCPF>
      </Info>
    </Container>
  );
}

export default Card;