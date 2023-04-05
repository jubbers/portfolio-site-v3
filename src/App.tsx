import * as React from "react";
import styled from 'styled-components';
import TrueCenteredWrapper from "./helpers/TrueCenteredWrapper";
import './reset.css'

const FullWindowDiv = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: #0e3831;
`;

const CenteredContent = styled(TrueCenteredWrapper)`
  display: flex;
  flex-direction: column;
`

const RoundedIcon = styled.img`
  height: 128px;
  width: 128px;

  border-radius: 5%;
  border: 2.5px solid #fff;
  margin-bottom: 1em;
`

const HeaderText = styled.h2`
  font-size: 32px;
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 200;
  color: #fff;
`

export default () => (
  <FullWindowDiv> 
    <CenteredContent>
      <RoundedIcon src="../assets/jtv-icon.png" alt="jtv-icon" />
      <HeaderText>Website is under construction.<br />Please come back in a week or so!</HeaderText>
    </CenteredContent>
  </FullWindowDiv>
);
