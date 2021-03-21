import styled from 'styled-components/native';
import { TextInput as Input } from 'react-native-paper';

export const LabelInput = styled.Text`
  left: -9px;
  font-size: 12px;
  font-family: 'RobotoMono_400Regular';
`;

export const TextInput = styled(Input).attrs({
  mode: 'flat',
  underlineColor: "#476A6F",
  keyboardType: 'numeric'
})`
  height: 55px;
`;

export const AdressView = styled.View`
  flex-direction: row;

  justify-content: space-between;
`;