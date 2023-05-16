import * as React from 'react';
import styled from 'styled-components';
import { Colors } from '~styles/Colors';
import HeaderButton from '~components/HeaderButton';

const FullScreenDiv = styled.header`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 95vh; // leaving 5% vh for the sticky nav

  color: ${Colors.text};
  background-color: ${Colors.text};
`

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 66.6%;
  justify-content: center;
  background-color: ${Colors.background.primary};
`

const HeaderText = styled.h1`
  font-size: 48pt;
  text-align: center;
`

const HeaderControls = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
  background-color: ${Colors.background.primary};
  padding-right: 12px;
`
const HeaderItem = styled.div`
  background-color: ${Colors.background.primary};
  width: 100%;
  height: 48%;
`

const FancyText = styled.span`
  background: linear-gradient(120deg, ${Colors.button.primary}, ${Colors.accent});
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Header = () => (
  <FullScreenDiv>
    <HeaderContent>
      <HeaderText>Howdy, I'm <FancyText>Justin</FancyText></HeaderText>
      <h3>a software engineer, game developer, painter, and more.</h3>
    </HeaderContent>
    <HeaderControls>
      <HeaderItem>
        <HeaderButton text='Web Dev' href='#games' hexColor={Colors.button.primary}/>
      </HeaderItem>
      <HeaderItem>
        <HeaderButton text='Games' href='#games' hexColor={Colors.button.tertiary}/>
      </HeaderItem>
    </HeaderControls>

  </FullScreenDiv>
)

export default Header;