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
  return (
    <Container>
      <Photo source={{ uri: 'https://github.com/21lucasmessias.png' }} />
      <Info>
        <TextContainer>
          <Text>Name</Text>
          <TextInfo>{person.name}</TextInfo>
        </TextContainer>
        <AgeCPF>
          <TextContainer>
            <Text>Age</Text>
            <TextInfo>{person.age}</TextInfo>
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