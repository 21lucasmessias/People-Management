import styled from 'styled-components/native';
import { TextInput as Input } from 'react-native-paper';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Info = styled.View`
  flex-direction: row;
  align-content: flex-start;
`;

export const TextInput = styled(Input).attrs({
  mode: 'flat',
  underlineColor: "#476A6F",
  keyboardType: 'numeric'
})`
  height: 55px;
  width: 45%;
  margin-right: 5px;
`;