import * as React from 'react';
import styled from 'styled-components';
import CodingIcon from '~media/icons/coding-icon.png';
import DiscordIcon from '~media/icons/discord-icon.png';
import DownloadIcon from '~media/icons/download-icon.png';
import GithubIcon from '~media/icons/github-icon.png';
import LinkIcon from '~media/icons/link-icon.png';
import LinkedinIcon from '~media/icons/linkedin-icon.png';
import TwitterIcon from '~media/icons/twitter-icon.png';

type LogoIconType =  'code' | 'discord' | 'download' | 'github' | 'linkedin' | 'link' |'twitter';

export interface LogoIconProps {
  iconType: LogoIconType;
  alt?: string;
  size?: number;
}

const GetIconByType = (type: LogoIconType) => {
  switch(type) {
    case 'code':
      return CodingIcon;
    case 'download':
      return DownloadIcon;
    case 'discord':
      return DiscordIcon;
    case 'github':
      return GithubIcon;
    case 'linkedin':
      return LinkedinIcon;
    case 'twitter':
      return TwitterIcon;

    default:
      throw new Error('Invalid Icon Type Passed');
  }
}

const LogoIcon = ({iconType, size, alt}: LogoIconProps) => {
  const Icon = styled.img`
    width: ${size + 'px'};
    height: ${size + 'px'};
    margin-right: 6px;
  `

  return (
    <Icon 
      src={GetIconByType(iconType)} 
      alt={alt || `${iconType} icon logo`} />
  )
}

export default LogoIcon;