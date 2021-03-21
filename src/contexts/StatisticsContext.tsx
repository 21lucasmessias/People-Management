import { ApolloError, ApolloQueryResult, FetchMoreOptions, FetchMoreQueryOptions } from "apollo-client";
import React, { createContext, ReactNode } from "react";

import { StatisticsQuery, StatisticsQueryVariables, useStatisticsQuery } from "../GraphQL/apolloComponents";

interface iStatisticsContext {
  error: ApolloError | undefined,
  loading: boolean,
  data: StatisticsQuery | undefined,
  refetch: (variables?: StatisticsQueryVariables | undefined) => Promise<ApolloQueryResult<StatisticsQuery>>,
}

export const StatisticsContext = createContext({} as iStatisticsContext);

type iStatisticsContextProvider = {
  children: ReactNode;
}

const StatisticsContextProvider: React.FC<iStatisticsContextProvider> = ({ children }) => {
  const {
    error,
    loading,
    data,
    refetch,
  } = useStatisticsQuery();

  return (
    <StatisticsContext.Provider value={{
      error: error,
      loading: loading,
      data: data,
      refetch: refetch,
    }}>
      {children}
    </StatisticsContext.Provider >
  )
}

export default StatisticsContextProvider;