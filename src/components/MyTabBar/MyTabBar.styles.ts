import styled from 'styled-components/native';

export const Container = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  flex-direction: row;
  height: 60px;
  border-width: 0px;
  padding: 0;
  margin: 0;
`;

export const TouchableOpacity = styled.TouchableOpacity`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;

  text-align: center;
  letter-spacing: 1.25px;
  text-transform: uppercase;
`;