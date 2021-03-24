import React from 'react';

import { Container, StatusBar, Text } from './Header.styles';

interface iHeader {
  title: string;
}

const Header: React.FC<iHeader> = ({ title }) => {
  return (
    <>
      <StatusBar />
      <Container>
        <Text>
          {title}
        </Text>
      </Container>
    </>
  );
}

export default Header;