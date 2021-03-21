import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 40px;
  margin-bottom: 40px;
`

export const Column1 = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: center;
`

export const Column2 = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const Column3 = styled.View`
  flex: 1;
  align-items: flex-end;
  justify-content: center;
`

export const Item = styled.View`
  flex-direction: row;
  align-items: center;
`

type iDot = {
  color: string
}

export const Dot = styled.View<iDot>`
  background-color: ${props => props.color};
  width: 15px;
  height: 15px;
  border-radius: 7px;
  margin-right: 5px;
`

export const Label = styled.Text`
  color: #476A6F;
  font-size: 14px;
  font-family: 'RobotoMono_400Regular';
`