import styled from 'styled-components/native'
import { TextInput as Input } from 'react-native-paper';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const NameAgeView = styled.View`
  width: 50%;
  flex-direction: column;
  margin-left: 16px;
`;

export const TextInput = styled(Input).attrs({
  mode: 'flat',
  underlineColor: "#476A6F"
})`
  height: 55px;
`;
