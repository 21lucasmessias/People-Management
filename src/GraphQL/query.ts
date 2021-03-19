import { gql } from 'apollo-boost';

export const GET_PERSONS = gql`
query getPersons ($sortField: String!, $decrescent: Boolean, $limit: Int!, $offset: Int!) {
  persons(sortField: $sortField, limit: $limit, offset: $offset, decrescent: $decrescent){
    id
    name {
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
