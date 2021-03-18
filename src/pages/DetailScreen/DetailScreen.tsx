import React from 'react';
import { Image } from 'react-native';

import { StackScreenProps } from '@react-navigation/stack';
import { SharedElement } from 'react-navigation-shared-element';

import CardTextContainer from '../../components/TextContainer/TextContainer';

import {
  Container,
  MainInfo,
  NameAgeView,
  InfoWrapper,
  Info,
  Text,
  TextInfo,
  TextContainer,
} from './DetailScreen.styles';

import { iStack } from '../../types';

type Props = StackScreenProps<iStack, 'Details'>;

const DetailScreen: React.FC<Props> = ({ route, navigation }) => {
  const { person } = route.params;

  const transformToAge = (birthday: number) => {
    var today = new Date();
    return Math.floor(((today.getDate() + (today.getMonth() + 1) * 30 + today.getFullYear() * 365) - birthday) / 365);
  }

  return (
    <Container>
      <MainInfo>
        <SharedElement id={`photo${person.cpf}`}>
          <Image source={{ uri: 'https://github.com/21lucasmessias.png' }} style={{ width: 170, height: 170, borderRadius: 100 }} />
        </SharedElement>

        <NameAgeView>
          <SharedElement id={`name${person.cpf}`}>
            <CardTextContainer title='Name' message={`${person.name.first} ${person.name.last}`} />
          </SharedElement>
          <SharedElement id={`age${person.cpf}`}>
            <CardTextContainer title='Age' message={`${transformToAge(person.birthday)}`} />
          </SharedElement>
        </NameAgeView>
      </MainInfo>
      <InfoWrapper>
        <Info>
          <TextContainer>
            <Text>RG</Text>
            <TextInfo>{person.rg}</TextInfo>
          </TextContainer>
          <TextContainer>
            <Text>CPF</Text>
            <TextInfo>{person.cpf}</TextInfo>
          </TextContainer>
        </Info>

        <Info>
          <TextContainer>
            <Text>CEP</Text>
            <TextInfo>{person.adress.cep}</TextInfo>
          </TextContainer>
          <TextContainer>
            <Text>Number</Text>
            <TextInfo>{person.adress.number}</TextInfo>
          </TextContainer>
        </Info>

        <Info>
          <TextContainer>
            <Text>City</Text>
            <TextInfo>{person.adress.city}</TextInfo>
          </TextContainer>
          <TextContainer>
            <Text>State</Text>
            <TextInfo>{person.adress.state}</TextInfo>
          </TextContainer>
        </Info>

        <Info>
          <TextContainer>
            <Text>District</Text>
            <TextInfo>{person.adress.district}</TextInfo>
          </TextContainer>
          <TextContainer>
            <Text>Street</Text>
            <TextInfo>{person.adress.street}</TextInfo>
          </TextContainer>
        </Info>
      </InfoWrapper>
    </Container>
  );
}

export default DetailScreen;