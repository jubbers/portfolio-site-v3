import * as React from 'react';
import styled from 'styled-components';
import CenteredContainer from './CenteredContainer'

interface WidgetProps {
  link: string;
  image: string; // relative path typed as a string
  title: string;
  description: string;
}


const Card = ({link, image, title, description}: WidgetProps) => {
  const Container = styled.article`
  display: flex;
  flex-direction: column;

  width: 30%;

  /* Temp values for dev use */
  /* background-color: green; */
  /* height: 80vh; */
  `

  const BorderWrap = styled(CenteredContainer)`
    border: 2px solid #fff;
    border-radius: 8px;
  `

  const CardHeader = styled(BorderWrap)`
    width: 100%;
    aspect-ratio: 16 / 9;
    background-image: url(${image});
    background-size: cover;

    *, *:visited, *:active, *:hover {
      color: #fff;
    }
  `

  const HeaderText = styled.h2`
    font-size: 8em;
    text-shadow: -0px 0px 8px #102f0c;
  `

  const CardBody = styled(BorderWrap)`
    margin-top: 16px;

    flex-direction: column;
  `

  return (
    <Container>
      <a href={link}>
        <CardHeader>
          <HeaderText>{title}</HeaderText>
        </CardHeader>
      </a>

      {/* <CardBody >
        <p>{description}</p>
      </CardBody> */}

    </Container>
  )
}

export default Card;