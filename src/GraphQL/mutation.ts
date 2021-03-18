import { gql } from '@apollo/client';

export const REGISTER_PERSON = gql`
mutation($name: NameInput!, $birthday: Int!, $cpf: String!, $rg: String!, $adress: AdressInput!) {
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