import React from 'react';

import { Container, Text } from './Header.styles';

interface iHeader {
  title: string;
}

const Header: React.FC<iHeader> = ({ title }) => {
  return (
    <Container>
      <Text>
        {title}
      </Text>
    </Container>
  );
}

export default Header;