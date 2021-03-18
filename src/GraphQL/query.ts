import { gql } from '@apollo/client';

export const GET_PERSONS = gql`
query($sortField: [String!]!, $decrescent: Boolean, $limit: Int!, $offset: Int!) {
  persons(sortField: $sortField, limit: $limit, offset: $offset, decrescent: $decrescent){
    _id
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