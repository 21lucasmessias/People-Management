import styled from 'styled-components/native';

export const Container = styled.View`
  height: 90%;
`;

export const FlatList = styled.FlatList`
`;

export const Text = styled.Text`
  color: #476A6F;
  font-size: 12px;
  font-family: 'RobotoMono_400Regular';

  align-self: center;
`;

export const FilterView = styled.View`
  flex-direction: row;
  justify-content: space-evenly;

  padding-bottom: 10px;
`;

export const TouchableOpacity = styled.TouchableOpacity`
  position: absolute;
  top: -5px;
  left: -35px;
  background-color: #476A6F;
  width: 35px;
  height: 35px;
  align-items: center;
  justify-content: center;
  border-bottom-right-radius: 15px;
`;