import styled from 'styled-components/native';

import { TextInput as Input } from 'react-native-paper';

export const LabelInput = styled.Text`
  left: -9px;
  font-size: 12px;
  font-family: 'RobotoMono_400Regular';
`;

export const NameView = styled.View`
  justify-content: space-evenly;
`;

export const TextInput = styled(Input).attrs({
  mode: 'flat',
  underlineColor: "#476A6F"
})`
  height: 55px;
`;
