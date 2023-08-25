import * as React from 'react';
import styled from 'styled-components';
import CenteredFlexContainer from "styles/CenteredContainer";
import Card, { CardProps } from 'components/Card';
import 'styles/reset.css';
import { Colors } from '~styles/Colors';

const FullWindowDiv = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${Colors.background.primary};

  @media (max-width: 1260px) {
    height: 100%;
  }
`;

const CenteredColumn = styled(CenteredFlexContainer)`
  flex-direction: column;
  color: ${Colors.text};
  padding: 16px;
`

const HeaderText = styled.h2`
  width: 100%;
  font-size: 64px;
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 600;
  color: ${Colors.text};
`  

const BodyText = styled.p`
  margin-bottom: 2em;
  padding: 0 15%;

  a {
    text-decoration: underline;
  }

  @media (max-width: 1260px) {
    padding: 0 20%;
  }
`

const Cards = styled.div`
  display: flex;
  flex-direction: row;

  gap: 12px;
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;

  @media (max-width: 1260px) {
    align-items: center;
    flex-direction: column;
    gap: 24px;
  }
`

interface CardRowProps {
  id: string,
  title: string,
  description: string,
  cardInfo: CardProps[]
}

const CardRow = ({id, title, description, cardInfo}: CardRowProps) => (
  <FullWindowDiv id={id}> 
    <CenteredColumn>
      {/* Text Content */}
      <HeaderText>{title}</HeaderText>
      <BodyText>{description}</BodyText>
      
      {/* Actual Cards */}
      <Cards>
        { cardInfo.map(cardData => <Card {...cardData} key={`card--${cardData.title}`} />) }
      </Cards>
    </CenteredColumn>
  </FullWindowDiv>
)

export default CardRow;