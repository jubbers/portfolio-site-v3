import * as React from 'react';
import styled from 'styled-components';
import CenteredFlexContainer from "./components/CenteredContainer";
import Card from './components/Card';
import './reset.css';

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
  font-size: 32px;
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 200;
  color: #fff;
`  

const BodyText = styled.p`
  margin-bottom: 2em;

  a {
    text-decoration: underline;
  }
`

export default () => (
  <FullWindowDiv> 
    <CenteredColumn>
      <HeaderText>Hi there!</HeaderText>
      <BodyText>
        The site is still <a href="https://github.com/saint-justin/portfolio-site-v3">under construction</a>, <br/>
        please check back in a few days for more examples!
      </BodyText>
      {/* Egg */}
      <Card 
        link='https://ianmatic.itch.io/egg' 
        repo='https://github.com/saint-justin/egg'
        image='https://img.itch.zone/aW1hZ2UvMjczMTc5LzEzOTIyNzUuZ2lm/347x500/%2Bn39Xg.gif' 
        title='Egg'
        description={<p>Egg is a cute, quick game about a finding friends. It's written in pure C#, bootstrapping from <a href='https://monogame.net/'>MonoGame</a> as a sprite renderer. Everything else was hand-spun by myself and my team.</p>}
        />

      {/* <RoundedIcon src={icon} alt="jtv-icon" /> */}
      {/* <HeaderText> */}
        {/* Website is under <Link href="https://github.com/saint-justin/portfolio-site-v3">construction.</Link><br /> */}
        {/* Please come back in a week or so!</HeaderText> */}
    </CenteredColumn>
  </FullWindowDiv>
);
