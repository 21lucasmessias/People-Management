import styled from 'styled-components/native';

import { TextInput as Input } from 'react-native-paper';
import { Button as Butt } from 'react-native-paper';

export const Container = styled.View`
  height: 90%;
`;

export const Form = styled.ScrollView`
  padding-left: 23px;
  padding-right: 23px;
`;

export const Section = styled.View`
  margin-top: 24px;

  border: 2px solid #476A6F;
  border-radius: 15px;

  padding-top: 5px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
`;

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

export const AdressView = styled.View`
  flex-direction: row;

  justify-content: space-between;
`;

export const ButtonsView = styled.View`
  flex-direction: row;
  justify-content: space-evenly;

  margin-top: 20px;
`;

export const Button = styled(Butt).attrs({
  color: '#476A6F'
})`
  width: 45%;
`;
