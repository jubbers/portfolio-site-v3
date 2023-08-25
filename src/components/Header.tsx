import * as React from 'react';
import styled from 'styled-components';
import { Colors } from '~styles/Colors';
import HeaderButton from '~components/HeaderButton';
import FancyText from '~styles/FancyText';

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 92.5vh; // leaving 7.5% vh for the sticky nav

  color: ${Colors.text};
  background-color: ${Colors.text};
`

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  text-align: left;
  justify-content: center;
  height: 100%;
  width: 66.6%;
  padding: 7.5%;
  background-color: ${Colors.background.primary};

  h1 {
    font-size: 48pt;
  }

  h3 {
    font-weight: 300;
  }

  @media (max-width: 1260px) {
    height: 100vh;
    width: 100%;
  }
`

const HeaderControls = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
  background-color: ${Colors.background.primary};

  @media (max-width: 1260px) {
    display: none;
  }
`

const Header = () => (
  <HeaderContainer>
    <HeaderContent>
      <h1>Hiya, I'm <FancyText>Justin</FancyText></h1>
      <h3><FancyText>engineer,</FancyText> designer, artist, climber, former EMT, and more</h3>
    </HeaderContent>
    <HeaderControls>
      <HeaderButton text='Web' href='#games' hexColor={Colors.button.primary}/>
      <HeaderButton text='Games' href='#games' hexColor={Colors.button.tertiary}/>
    </HeaderControls>
  </HeaderContainer>
)

export default Header;