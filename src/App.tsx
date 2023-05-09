import * as React from 'react';
import styled from 'styled-components';

import CenteredFlexContainer from "styles/CenteredContainer";
import Card from 'components/Card';
import DinoBanner from 'media/banners/dino-land-banner.png'
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

const Cards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  gap: 12px;

  flex-wrap: wrap;
`

export default () => (
  <FullWindowDiv> 
    <CenteredColumn>
      <HeaderText>Hi there!</HeaderText>
      <BodyText>
        The site is still <a href="https://github.com/saint-justin/portfolio-site-v3">under construction</a>, <br/>
        please check back in a few days for more examples!
      </BodyText>

      <Cards>
        {/* Egg */}
        <Card 
          link='https://ianmatic.itch.io/egg' 
          repo='https://github.com/saint-justin/egg'
          image='https://img.itch.zone/aW1hZ2UvMjczMTc5LzEzOTIyNzUuZ2lm/347x500/%2Bn39Xg.gif' 
          title='Egg'
          description={<p>Egg is a cute, quick game about a finding friends. It's written in pure C#, bootstrapping from <a href='https://monogame.net/'>MonoGame</a> as a sprite renderer. Everything else was hand-spun by myself and my team.</p>}
          />

        {/* Dino Land */}
        <Card 
          link='https://people.rit.edu/jtv6445/230/project4/' 
          repo='https://github.com/saint-justin/dino-land'
          image={DinoBanner} 
          title=''
          description={<p>Dino land is a DOM-based clicker game. Get as many dinos as fast as possible. The whole project is pure HTML/CSS/JS, no frameworks or other tools were used. No dinosaurs were harmed in the making of this game.</p>}
          />
      </Cards>
    </CenteredColumn>
  </FullWindowDiv>
);
