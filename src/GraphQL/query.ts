import { gql } from 'apollo-boost';

export const GET_PERSONS = gql`
query getPersons ($limit: Int!, $offset: Int!) {
  persons(limit: $limit, offset: $offset){
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

export const GET_STATISTICS = gql`
query getStatistics {
  statistics {
    id
    birthday
  }
}`;