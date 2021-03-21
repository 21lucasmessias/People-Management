import * as ReactApolloHooks from "react-apollo-hooks";
import { ALTER_PERSON, DELETE_PERSON, REGISTER_PERSON } from "./mutation";
import { GET_PERSONS } from "./query";

export type iCEP = {
  bairro: string,
  localidade: string,
  logradouro: string,
  uf: string,
};

export type iStack = {
  List: undefined;
  Details: { person: iPerson };
}

/* ------- Register ---------- */
export type RegisterPersonVariables = {
  name: {
    first: string,
    last: string
  },
  birthday: number,
  cpf: string,
  rg: string,
  adress: {
    street: string,
    number: string,
    district: string,
    city: string,
    state: string,
    cep: string
  }
}

export type RegisterPersonMutation = { __typename?: "Mutation" } & {
  registerPerson: { __typename?: "Person" } & Pick<iPerson, "id" | "adress" | "birthday" | "cpf" | "name" | "rg">;
};

export function useRegisterPersonMutation(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    RegisterPersonMutation,
    RegisterPersonVariables
  >
) {
  return ReactApolloHooks.useMutation<
    RegisterPersonMutation,
    RegisterPersonVariables
  >(REGISTER_PERSON, baseOptions);
}

/* ------- Delete ---------- */

export type DeletePersonMutationVariables = {
  id: string
}

export type DeletePersonMutation = { __typename?: "Mutation" } & {
  deletePerson: { __typename?: "Person" } & Pick<DeletePersonMutationVariables, "id">;
};

export function useDeletePersonMutation(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    DeletePersonMutation,
    DeletePersonMutationVariables
  >
) {
  return ReactApolloHooks.useMutation<
    DeletePersonMutation,
    DeletePersonMutationVariables
  >(DELETE_PERSON, baseOptions);
}

/* ------ Alter ------ */

export type AlterPersonMutationVariables = {
  id: string,
  name: {
    first: string,
    last: string
  },
  birthday: number,
  cpf: string,
  rg: string,
  adress: {
    street: string,
    number: string,
    district: string,
    city: string,
    state: string,
    cep: string
  }
}

export type AlterPersonMutation = { __typename?: "Mutation" } & {
  alterPerson: { __typename?: "Person" } & Pick<AlterPersonMutationVariables, "id" | "adress" | "birthday" | "cpf" | "name" | "rg">;
};

export function useAlterPersonMutation(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    AlterPersonMutation,
    AlterPersonMutationVariables
  >
) {
  return ReactApolloHooks.useMutation<
    AlterPersonMutation,
    AlterPersonMutationVariables
  >(ALTER_PERSON, baseOptions);
}


/* ------ getPersons ------ */
export type iPerson = {
  id: string,
  name: {
    first: string,
    last: string
  },
  birthday: number,
  cpf: string,
  rg: string,
  adress: {
    street: string,
    number: string,
    district: string,
    city: string,
    state: string,
    cep: string
  }
}

export type iPersons = {
  persons: Array<iPerson>
}

export type PersonsQueryVariables = {
  limit: number,
  offset: number,
};

export type PersonsQuery = { __typename?: "Query" } & {
  persons: Array<{ __typename?: "Person" } & Pick<iPerson, "id" | "adress" | "birthday" | "cpf" | "name" | "rg">>;
};

export function usePersonsQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<PersonsQueryVariables>
) {
  return ReactApolloHooks.useQuery<PersonsQuery, PersonsQueryVariables>(
    GET_PERSONS,
    baseOptions
  );
}