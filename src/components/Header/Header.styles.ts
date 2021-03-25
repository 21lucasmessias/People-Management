import styled from 'styled-components/native';
import { height } from '../../../assets/dimensions';

export const Container = styled.View`
  height: ${`${height * 0.08}px`};
  
  background-color: #476A6F;
  padding-left: 8px;
  justify-content: center;
`;

export const StatusBar = styled.View`
  height: ${`${height * 0.03}px`};

  background-color: #476A6F;
`;

export const Text = styled.Text`
  color: #CCC;
  font-size: 26px;
  font-family: 'RobotoMono_400Regular';
`;
