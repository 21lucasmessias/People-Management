import React, { useContext } from 'react';
import { StackScreenProps } from '@react-navigation/stack';

import { PersonsQuery, useDeletePersonMutation } from '../../GraphQL/apolloComponents';

import {
  Container,
  ButtonContainer,
  Button
} from './DetailScreen.styles';

import { iStack } from '../../GraphQL/apolloComponents';
import { AlterContext } from '../../contexts/AlterContext';
import MainInfo from '../../components/Detail/MainInfo/MainInfo';
import InfoWrapper from '../../components/Detail/InfoWrapper/InfoWrapper';
import { GET_PERSONS } from '../../GraphQL/query';

type Props = StackScreenProps<iStack, 'Details'>;

const DetailScreen: React.FC<Props> = ({ navigation }) => {
  const {
    id,
    handleAlterInputs,
  } = useContext(AlterContext);

  const [deletePerson] = useDeletePersonMutation();

  const handleDeletePerson = () => {
    deletePerson({
      variables: {
        id: id
      },
      update: (store, { data }) => {
        const personsData = store.readQuery<PersonsQuery>({
          query: GET_PERSONS,
          variables: {
            limit: 5,
            offset: 0
          }
        });

        store.writeQuery<PersonsQuery>({
          query: GET_PERSONS,
          variables: {
            limit: 5,
            offset: 0
          },
          data: {
            persons: [...personsData!.persons.filter((person) => person.id !== data?.deletePerson.id)]
          }
        });
      }
    })

    navigation.goBack();
  }

  return (
    <Container>
      <ButtonContainer>
        <Button onPress={handleAlterInputs}>Alter</Button>
        <Button onPress={handleDeletePerson}>Delete</Button>
      </ButtonContainer>
      <MainInfo />

      <InfoWrapper />

    </Container>
  );
}

export default DetailScreen;