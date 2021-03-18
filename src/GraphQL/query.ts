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

/*export const GET_PERSON = gql`
query($sortFields: String!, $limit: Int!, $initValue: String) {
  persons(sortField: $sortFields, limit: $limit, initValue: $initValue){
    name {
      first
      last
    }
    birthday {
      day
      month
      year
    }
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
}
`;*/