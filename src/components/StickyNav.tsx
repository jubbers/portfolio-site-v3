import * as React from 'react';
import JtvLogo from '~media/icons/jtv-icon.png'
import { StickyNavData } from 'PageData';
import LogoIcon, { LogoIconProps } from './LogoIcon';
import { JtvIcon, NavItem, NavList, NavWrapper } from '~styles/StickyNav';

export interface StickyNavItem {
  href: any;
  content: string;
  iconInfo?: LogoIconProps;
  download?: string;
}

/* Externalized styles to ~/styles/StickyNav.tsx because the pieces collectively are nearly 100 lines long */

const StickyNav = () => {
  const GenerateLiComponent = ({content, href, iconInfo, download}: StickyNavItem) => {
    return (
    <NavItem>
      <a href={href} download={download}>
        { iconInfo && <LogoIcon iconType={iconInfo.iconType} alt={iconInfo.alt} size={18} /> }
        { content }
      </a>
    </NavItem>)
  }

  return (
    <NavWrapper>
      <NavList>
        <li><JtvIcon src={JtvLogo} alt="oh wowee it's an icon of the guy who made the website, neat" /></li>
        { StickyNavData.map(item => GenerateLiComponent(item)) }
      </NavList>
    </NavWrapper>
  )
}

export default StickyNav;