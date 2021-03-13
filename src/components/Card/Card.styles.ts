import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  border: 2px solid #476A6F;
  border-radius: 11px;
  margin-left: 23px;
  margin-right: 23px;
  margin-top: 12px;

  height: 121px;

  flex-direction: row;

  align-items: center;
`

export const TextContainer = styled.View`
  padding-right: 12px;
`;

export const Text = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 16px;

  letter-spacing: 1.25px;
  text-transform: uppercase;

  color: #000000;
`;

export const TextInfo = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 16px;

  letter-spacing: 1.25px;
  text-transform: uppercase;

  color: #519E8A;
`;


export const Photo = styled.Image`
  height: 80px;
  width: 80px;
  margin-left: 16px;
  margin-right: 12px;

  border-radius: 50px;
`;

export const Info = styled.View`
  flex-direction: column;
`;

export const AgeCPF = styled.View`
  flex-direction: row;
`;