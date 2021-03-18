import React from 'react';
import { Image } from 'react-native';

import { StackScreenProps } from '@react-navigation/stack';
import { SharedElement } from 'react-navigation-shared-element';

import CardTextContainer from '../../components/TextContainer/TextContainer';
import DetailContainer from '../../components/DetailContainer/DetailContainer';

import {
  Container,
  MainInfo,
  NameAgeView,
  InfoWrapper,
  Info,
} from './DetailScreen.styles';

import { iStack } from '../../types';

type Props = StackScreenProps<iStack, 'Details'>;

const DetailScreen: React.FC<Props> = ({ route }) => {
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
          <DetailContainer message='RG' title={person.rg} />
          <DetailContainer message='CPF' title={person.cpf} />
        </Info>

        <Info>
          <DetailContainer message='CEP' title={person.adress.cep} />
          <DetailContainer message='Number' title={person.adress.number} />
        </Info>

        <Info>
          <DetailContainer message='City' title={person.adress.city} />
          <DetailContainer message='State' title={person.adress.state} />
        </Info>

        <Info>
          <DetailContainer message='District' title={person.adress.district} />
          <DetailContainer message='Street' title={person.adress.street} />
        </Info>
      </InfoWrapper>
    </Container>
  );
}

export default DetailScreen;