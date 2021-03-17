import { gql } from '@apollo/client';

export const GET_PERSONS = gql`
mutation($name: NameInput!, $birthday: DateInput!, $cpf: String!, $rg: String!, $adress: AdressInput!) {
  registerPerson(
    name: $name,
    birthday: $birthday,
    cpf: $cpf,
    rg: $rg,
    adress: $adress
  ) {
  	_id
  }
}`;