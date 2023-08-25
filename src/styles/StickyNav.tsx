import styled from 'styled-components';
import { Colors } from './Colors';

const NavWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 7.5vh;

	position: -webkit-sticky;
	position: sticky;
  top: 0;
  padding: 0 64px;
  z-index: 100;

  border-top: 2px solid ${Colors.background.secondary};
  border-bottom: 2px solid ${Colors.background.secondary};
  background-color: ${Colors.background.primary};
`

const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  padding: 8px;
  gap: 8px;
  list-style-type: none;
`

const NavItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100px;
  padding: 8px 12px;
  
  color: ${Colors.text};
  border-radius: 8px;
  border: 2px solid ${Colors.background.secondary};
  cursor: pointer;
  transition: 0.2s;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    transition: 0.2s;

    &:active, &:hover {
      color: ${Colors.text};
    }
  }

  &:active, &:hover {
    border: 2px solid #fff;
  }

  // Fancy gradient-background
  position: relative;
  z-index: 1;
  background: ${Colors.background.primary};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom right, ${Colors.button.primary}, ${Colors.button.tertiary});
    opacity: 0;
    transition: opacity 0.2s;
    z-index: -1;
    border-radius: 5px;
  }

  &:hover::before {
    opacity: 1;
  }
`

const JtvIcon = styled.img`
  height: 100%;
  width: 36px;
  border-radius: 8px;
  border: 2px solid ${Colors.background.secondary};
`

export {
  NavWrapper, 
  NavList,
  NavItem,
  JtvIcon
}