import styled from 'styled-components/native';

import { TextInput as Input } from 'react-native-paper';
import { Button as Butt } from 'react-native-paper';

export const Container = styled.View`
  height: 90%;
`;

export const Label = styled.Text`
  left: -9px;
  font-size: 12px;
  font-family: 'RobotoMono_400Regular';
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

export const CityState = styled.View`
  flex-direction: row;

  justify-content: space-between;
`;

export const TextInput = styled(Input).attrs({
  mode: 'flat',
  underlineColor: "#476A6F"
})`
  height: 55px;
`;

export const DateView = styled.View`
  height: 55px;
  border-bottom-width: 1px;
  border-bottom-color: #476A6F;
  padding-left: 12px;
  justify-content: space-evenly;
`;

export const DateText = styled.Text`
  font-size: 16px;
`;

type iDateLabel = {
  empty: boolean;
}

export const DateLabel = styled.Text<iDateLabel>`
  font-family: sans-serif; 
  font-size: ${(props) => props.empty ? '16px' : '12px'};
  color: ${(props) => props.empty ? 'rgba(0, 0, 0, 0.55)' : '#476A6F'};
  top: ${(props) => props.empty ? '13px' : '0px'};
`;

export const Buttons = styled.View`
  flex-direction: row;
  justify-content: space-evenly;

  margin-top: 20px;
`;

export const Button = styled(Butt).attrs({
  color: '#476A6F'
})`
  width: 45%;
`;