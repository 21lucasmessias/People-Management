import styled from 'styled-components/native';
import { Button as Butt } from 'react-native-paper';

export const Container = styled.ScrollView`
  padding: 20px;
  height: 93%;
`

export const ButtonContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
  padding-bottom: 30px;
`;

export const Button = styled(Butt).attrs({
  color: '#476A6F',
  mode: "contained"
})`
  width: 45%;
`;