import styled from 'styled-components/native';
import { Button as Butt } from 'react-native-paper';

export const Container = styled.View`
  padding: 20px;
  height: 90%;
  align-items: center;
`

export const MainInfo = styled.View`
  flex-direction: row;
  align-items: center;

  margin-top: 30px;
`;

export const NameAgeView = styled.View`
  flex-direction: column;
  flex: 1;
  margin-left: 16px;
`;

export const InfoWrapper = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Info = styled.View`
  flex-direction: row;
  align-content: flex-start;
  
`;

export const ButtonContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const Button = styled(Butt).attrs({
  color: '#476A6F',
  mode: "contained"
})`
  width: 45%;
`;