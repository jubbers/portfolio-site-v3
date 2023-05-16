import * as React from 'react';
import styled from 'styled-components';
import { Colors } from '~styles/Colors';

interface HeaderButtonProps {
  text: string;
  href: string;
  hexColor: string;
}

const HeaderButton = ({text, href, hexColor}: HeaderButtonProps) => {
  const BigButton = styled.a`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;

    color: ${Colors.text};
    background-color: ${hexColor};
    border-radius: 10%;

    font-size: 32pt;

    :hover {
      background-color: ${Colors.button.secondary};
      color: ${hexColor};
    }

    :active {
      background-color: ${Colors.button.secondary_variant};
    }
  `

  return (
    <BigButton href={href}>{text}</BigButton>
  )
}

export default HeaderButton;