import { ApolloError, ApolloQueryResult, FetchMoreOptions, FetchMoreQueryOptions } from "apollo-client";
import React, { createContext, ReactNode } from "react";

import { PersonsQuery, PersonsQueryVariables, usePersonsQuery } from "../GraphQL/apolloComponents";

interface iListContext {
  error: ApolloError | undefined,
  loading: boolean,
  data: PersonsQuery | undefined,
  fetchMore: <K extends keyof PersonsQueryVariables>(fetchMoreOptions: FetchMoreQueryOptions<PersonsQueryVariables, K> & FetchMoreOptions<PersonsQuery, PersonsQueryVariables>) => Promise<ApolloQueryResult<PersonsQuery>>,
  refetch: (variables?: PersonsQueryVariables | undefined) => Promise<ApolloQueryResult<PersonsQuery>>,
}

export const ListContext = createContext({} as iListContext);

type iListContextProvider = {
  children: ReactNode;
}

const ListContextProvider: React.FC<iListContextProvider> = ({ children }) => {
  const {
    error,
    loading,
    data,
    fetchMore,
    refetch,
  } = usePersonsQuery({
    variables: {
      limit: 5,
      offset: 0,
    },
  });

  return (
    <ListContext.Provider value={{
      error: error,
      loading: loading,
      data: data,
      fetchMore: fetchMore,
      refetch: refetch,
    }}>
      {children}
    </ListContext.Provider >
  )
}

export default ListContextProvider;