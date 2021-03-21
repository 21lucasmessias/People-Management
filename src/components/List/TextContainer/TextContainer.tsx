import React from 'react';

import { Container, Text, TextInfo } from './TextContainer.styles';

type iTextContainer = {
  title: string,
  message: string
}

const TextContainer: React.FC<iTextContainer> = ({ title, message }) => {
  return (
    <Container>
      <Text>{title}</Text>
      <TextInfo>{message}</TextInfo>
    </Container>
  );
}

export default TextContainer;