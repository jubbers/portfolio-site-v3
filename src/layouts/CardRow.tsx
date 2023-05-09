import * as React from 'react';
import styled from 'styled-components';
import CenteredFlexContainer from "styles/CenteredContainer";
import Card, { CardProps } from 'components/Card';
import 'styles/reset.css';

const FullWindowDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #0e3831;
`;

const CenteredColumn = styled(CenteredFlexContainer)`
  flex-direction: column;
  color: #fff;
`

const HeaderText = styled.h2`
  width: 100%;
  font-size: 64px;
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 600;
  color: #fff;
`  

const BodyText = styled.p`
  margin-bottom: 2em;

  a {
    text-decoration: underline;
  }
`

const Cards = styled.div`
  display: flex;
  flex-direction: row;

  gap: 12px;
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;
`

interface CardRowProps {
  title: string,
  description: string,
  cardInfo: CardProps[]
}

const CardRow = ({title, description, cardInfo}: CardRowProps) => (
  <FullWindowDiv> 
    <CenteredColumn>
      {/* Text Content */}
      <HeaderText>{title}</HeaderText>
      <BodyText>{description}</BodyText>
      
      {/* Actual Cards */}
      <Cards>
        { cardInfo.map(cardData => <Card {...cardData} />) }
      </Cards>
    </CenteredColumn>
  </FullWindowDiv>
)

export default CardRow;