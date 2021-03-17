import React, { createContext, ReactNode, useState } from 'react';

import { ApolloClient } from "@apollo/client";

interface iListContext {
  client: ApolloClient<any> | null,
  setClient: React.Dispatch<React.SetStateAction<ApolloClient<any> | null>>
}

interface iListContextProvider {
  children: ReactNode;
}

export const ListContext = createContext({} as iListContext);

const ListContextProvider: React.FC<iListContextProvider> = ({ children }) => {
  const [client, setClient] = useState<ApolloClient<any> | null>(null);

  return (
    <ListContext.Provider value={{ client, setClient }}>
      {children}
    </ListContext.Provider>
  )
}

export default ListContextProvider;