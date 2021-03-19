import { gql } from 'apollo-boost';

export const REGISTER_PERSON = gql`
mutation registerPerson($name: NameInput!, $birthday: Int!, $cpf: String!, $rg: String!, $adress: AdressInput!) {
  registerPerson(
    name: $name,
    birthday: $birthday,
    cpf: $cpf,
    rg: $rg,
    adress: $adress
  ) {
  	id
    name{
      first
      last
    }
    birthday
    cpf
    rg
    adress{
      street
      number
      district
      city
      state
      cep
    }
  }
}`;

export const DELETE_PERSON = gql`
mutation deletePerson($id: String!){
	deletePerson(id: $id){
    id
  }
}
`;

export const ALTER_PERSON = gql`
mutation alterPerson($id: String!, $name: NameInput!, $birthday: Int!, $cpf: String!, $rg: String!, $adress: AdressInput!) {
  alterPerson(id: $id, name: $name, birthday: $birthday, cpf: $cpf, rg: $rg, adress: $adress){
    id
  }
}
`;