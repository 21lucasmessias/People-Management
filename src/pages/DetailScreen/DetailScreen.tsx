import React from 'react';
import { Image } from 'react-native';

import { StackScreenProps } from '@react-navigation/stack';
import { SharedElement } from 'react-navigation-shared-element';

import { useAlterPersonMutation, useDeletePersonMutation } from '../../GraphQL/apolloComponents';
import CardTextContainer from '../../components/TextContainer/TextContainer';
import DetailContainer from '../../components/DetailContainer/DetailContainer';

import {
  Container,
  MainInfo,
  NameAgeView,
  InfoWrapper,
  Info,
  ButtonContainer,
  Button
} from './DetailScreen.styles';

import { iStack } from '../../GraphQL/apolloComponents';

type Props = StackScreenProps<iStack, 'Details'>;

const DetailScreen: React.FC<Props> = ({ route }) => {
  const { person } = route.params;
  const [deletePerson] = useDeletePersonMutation();
  const [alterPerson] = useAlterPersonMutation();

  const transformToAge = (birthday: number) => {
    var today = new Date();
    return Math.floor(((today.getDate() + (today.getMonth() + 1) * 30 + today.getFullYear() * 365) - birthday) / 365);
  }

  const handleAlterPerson = () => {
    alterPerson({
      variables: {
        id: person.id,
        name: {
          first: person.name.first,
          last: 'Z'//person.name.last
        },
        birthday: person.birthday,
        cpf: person.cpf,
        rg: person.rg,
        adress: {
          street: person.adress.street,
          number: person.adress.number,
          district: person.adress.district,
          city: person.adress.city,
          state: person.adress.state,
          cep: person.adress.cep,
        }
      }
    })
  }

  const handleDeletePerson = () => {
    deletePerson({
      variables: {
        id: person.id
      }
    })
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
          <DetailContainer title='RG' message={`${person.rg}`} />
          <DetailContainer title='CPF' message={`${person.cpf}`} />
        </Info>

        <Info>
          <DetailContainer title='CEP' message={`${person.adress.cep}`} />
          <DetailContainer title='Number' message={`${person.adress.number}`} />
        </Info>

        <Info>
          <DetailContainer title='City' message={`${person.adress.city}`} />
          <DetailContainer title='State' message={`${person.adress.state}`} />
        </Info>

        <Info>
          <DetailContainer title='District' message={`${person.adress.district}`} />
          <DetailContainer title='Street' message={`${person.adress.street}`} />
        </Info>
      </InfoWrapper>
      <ButtonContainer>
        <Button onPress={handleAlterPerson}>Alter</Button>
        <Button onPress={handleDeletePerson}>Delete</Button>
      </ButtonContainer>
    </Container>
  );
}

export default DetailScreen;