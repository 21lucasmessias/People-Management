import styled from "styled-components/native";
import { height, width } from '../../../../../assets/dimensions';

export const Container = styled.View`
  width: ${`${width / 3}px`};
  top: ${`${height * -0.035}px`};
  align-items: center;
`;

export const ContainerSelected = styled.View`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 30px;
  elevation: 5;
`;

export const Touchable = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
`;