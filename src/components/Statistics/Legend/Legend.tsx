import React from 'react';

import {
  Container,
  Column1,
  Column2,
  Column3,
  Item,
  Dot,
  Label,
} from './Legend.styles';

export type iData = {
  data: number,
  label: number,
  color: string
}

interface iLegend {
  data: iData[];
}

const Legend: React.FC<iLegend> = ({ data }) => {
  return (
    <Container>
      <Column1>
        {data.map((statistic, index) => {
          let offSetIndex = index + 1;

          if (offSetIndex % 3 === 1) {
            return (
              <Item key={index}>
                <Dot color={statistic.color} />
                <Label>{statistic.label}</Label>
              </Item>
            )
          }

          return (
            <Item key={index} />
          )
        })}
      </Column1>
      <Column2>
        {data.map((statistic, index) => {
          let offSetIndex = index + 1;

          if (offSetIndex % 3 === 2) {
            return (
              <Item key={index}>
                <Dot color={statistic.color} />
                <Label>{statistic.label}</Label>
              </Item>
            )
          }

          return (
            <Item key={index} />
          )
        })}
      </Column2>
      <Column3>
        {data.map((statistic, index) => {
          if ((index + 1) % 3 === 0) {
            return (
              <Item key={index}>
                <Dot color={statistic.color} />
                <Label>{statistic.label}</Label>
              </Item>
            )
          }

          return (
            <Item key={index} />
          )
        })}
      </Column3>
    </Container>
  );
}

export default Legend;