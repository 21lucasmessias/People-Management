import React from 'react';

import {
  Touchable,
  Container,
  TextContainer,
  Text,
  TextInfo,
  Photo,
  Info,
  AgeCPF
} from './Card.styles'

import { iPerson } from '../../types';

type iCard = {
  person: iPerson
}

const Card: React.FC<iCard> = ({ person }) => {
  const transformToAge = (birthday: number) => {
    var today = new Date();
    return Math.floor(((today.getDate() + (today.getMonth() + 1) * 30 + today.getFullYear() * 365) - birthday) / 365);
  }

  const handleOpenPerson = () => {
  }

  return (
    <Touchable onPress={handleOpenPerson}>

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

    </Touchable>
  );
}

export default Card;