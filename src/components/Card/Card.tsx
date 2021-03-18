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

  const transformToAge = (birthday: number) => {
    const year = Math.floor(birthday / 365);
    const month = Math.floor((birthday % 365) / 30);
    const day = Math.floor((birthday % 365) % 30)

    var today = new Date();
    var birthdayDate = new Date(year, month, day);
    var age = today.getFullYear() - birthdayDate.getFullYear();
    var m = today.getMonth() - birthdayDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthdayDate.getDate())) {
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
            <TextInfo>{transformToAge(person.birthday)}</TextInfo>
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