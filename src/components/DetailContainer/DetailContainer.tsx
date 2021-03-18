import React from 'react';

import { Container, Text, TextInfo } from './DetailContainer.styles';

type iDetailContainer = {
  title: string,
  message: string
}

const DetailContainer: React.FC<iDetailContainer> = ({ title, message }) => {
  return (
    <Container>
      <Text>{title}</Text>
      <TextInfo>{message}</TextInfo>
    </Container>
  );
}

export default DetailContainer;