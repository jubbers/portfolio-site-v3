import * as React from 'react';
import styled from 'styled-components';
import CenteredContainer from 'styles/CenteredContainer';
import DiscordLogo from '~media/icons/discord-icon.png'
import GithubLogo from '~media/icons/github-icon.png';
import LinkIcon from '~media/icons/link-icon.png';
import { Colors } from '~styles/Colors';

export interface CardProps {
  link?: string;
  repo?: string;
  invite?: string;
  image: string; // relative path typed as a string
  title?: string;
  description: React.ReactElement;
}

const Card = ({link, image, title, invite, description, repo}: CardProps) => {
  const Container = styled.article`
    display: flex;
    flex-direction: column;

    width: 30%;
    min-width: 400px;

    @media (max-width: 1260px) {
      width: 60%;
      min-width: 450px;
    }
  `

  const CardHeader = styled(CenteredContainer)`
    width: 100%;
    aspect-ratio: 16 / 9;
    background-image: url(${image});
    background-size: cover;
    border-radius: 8px 8px 0 0;
    position: relative;

    *, *:visited, *:active, *:hover {
      color: #fff;
    }
  `

  const HeaderText = styled.h2`
    font-size: 8em;
    text-shadow: -0px 0px 8px #102f0c;
  `

  const CardBody = styled(CenteredContainer)`
    border-radius: 0 0 8px 8px;
    margin-top: 6px;
    flex-direction: row;
    text-align: left;
    background-color: ${Colors.background.secondary};

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
    /* flex-direction: row; */
    /* justify-self: flex-end; */
    /* align-self: flex-start; */
    position: absolute;
    top: 0;
    right: 0;
    padding: 6px;

    /* height: 100%; */
    gap: 8px;

    a {
      display: flex;
      border-radius: 100%;
      padding: 5px;
      border: 2.5px solid ${Colors.border};

      img {
        width: 32px;
        height: 32px;
      }
    }
  `

  return (
    <Container>
      <a href={link || repo} target="_blank" rel="noreferrer noopener">
        <CardHeader>
          { title && <HeaderText>{title}</HeaderText> }
          <BodyIcons>
            { link && 
              <a href={link} aria-label='Project link' target="_blank" rel="noreferrer noopener">
                <img alt='Link Icon' src={LinkIcon} />
              </a> }
            { invite && 
              <a href={invite} aria-label='Discord Invite link' target="_blank" rel="noreferrer noopener">
                <img alt='Discord Logo' src={DiscordLogo} />
              </a> }
            { repo && 
              <a href={repo} aria-label='Github repository link' target="_blank" rel="noreferrer noopener">
                <img alt='Github Logo' src={GithubLogo} />
              </a> }
          </BodyIcons>
        </CardHeader>
      </a>

      <CardBody>
        { description }
      </CardBody>

      {/* <CardBody >
        <p>{description}</p>
      </CardBody> */}

    </Container>
  )
}

export default Card;