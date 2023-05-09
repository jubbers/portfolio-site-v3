import * as React from 'react';
import styled from 'styled-components';
import CenteredContainer from 'styles/CenteredContainer';
import GithubLogo from 'media/icons/github-icon.png';
import LinkIcon from 'media/icons/link-icon.png';

export interface CardProps {
  link: string;
  repo?: string;
  image: string; // relative path typed as a string
  title: string;
  description: React.ReactElement;
}

const Card = ({link, image, title, description, repo}: CardProps) => {
  const Container = styled.article`
  display: flex;
  flex-direction: column;

  width: 30%;
  min-width: 400px;
  `

  const BorderWrap = styled(CenteredContainer)`
    border: 2px solid #fff;
  `

  const CardHeader = styled(BorderWrap)`
    width: 100%;
    aspect-ratio: 16 / 9;
    background-image: url(${image});
    background-size: cover;
    border-radius: 8px 8px 0 0;


    *, *:visited, *:active, *:hover {
      color: #fff;
    }
  `

  const HeaderText = styled.h2`
    font-size: 8em;
    text-shadow: -0px 0px 8px #102f0c;
  `

  const CardBody = styled(BorderWrap)`
    border-radius: 0 0 8px 8px;
    border-top: 0;
    flex-direction: row;
    text-align: left;

    p {
      align-self: flex-start;
      padding: 8px 12px;
    }

    a {
      text-decoration: underline;
    }
  `

  const BodyIcons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    padding: 0 6px;
    height: 100%;
    border-left: 2px solid #fff;

    a {
      display: flex;
      border-radius: 100%;
      padding: 3px;
      border: 3px solid #FFF;

      img {
        width: 32px;
        height: 32px;
      }
    }
  `

  return (
    <Container>
      <a href={link}>
        <CardHeader>
          <HeaderText>{title}</HeaderText>
        </CardHeader>
      </a>

      <CardBody>
        { description }
        <BodyIcons>
          <a href={link} aria-label='Project Link'><img alt='Link Icon' src={LinkIcon} /></a>
          { repo && <a href={repo} aria-label='Github repository link'><img alt='Github Logo' src={GithubLogo} /></a>}
        </BodyIcons>
      </CardBody>

      {/* <CardBody >
        <p>{description}</p>
      </CardBody> */}

    </Container>
  )
}

export default Card;