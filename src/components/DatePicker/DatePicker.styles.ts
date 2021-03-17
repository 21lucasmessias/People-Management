import styled from 'styled-components/native';

type iDateView = {
  dateError: boolean
}

export const DateView = styled.View<iDateView>`
  height: 55px;
  border-bottom-width: 1.3px;
  border-bottom-color: ${(props) => props.dateError ? 'rgb(179, 47, 70)' : '#476A6F'};
  padding-left: 12px;
  justify-content: space-evenly;
`;

export const DateText = styled.Text`
  font-size: 16px;
`;

type iDateLabel = {
  empty: boolean,
  dateError: boolean
}

export const DateLabel = styled.Text<iDateLabel>`
  font-family: sans-serif;
  font-weight: normal;
  font-size: ${(props) => props.empty ? '16px' : '12px'};
  color: ${(props) => props.dateError ? 'rgb(179, 47, 70)' : props.empty ? 'rgba(0, 0, 0, 0.55)' : '#476A6F'};
  top: ${(props) => props.empty ? '13px' : '0px'};
`;