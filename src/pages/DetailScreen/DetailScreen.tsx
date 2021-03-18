import React from 'react';
import { iPerson } from '../../types';

import {
  Container,
  TextContainer,
  Text,
  TextInfo,
  Photo,
  Info,
  AgeCPF
} from './DetailScreen.styles';

type iDetailScreen = {
  person: iPerson
}

const DetailScreen: React.FC<iDetailScreen> = ({ person }) => {
  const transformToAge = (birthday: number) => {
    var today = new Date();
    return Math.floor(((today.getDate() + (today.getMonth() + 1) * 30 + today.getFullYear() * 365) - birthday) / 365);
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

export default DetailScreen;