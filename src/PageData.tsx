import * as React from "react";
import CardMocksBanner from '~media/banners/card-mocks-banner.png';
import ChangelingBanner from '~media/banners/changeling-banner.png';
import DinoBanner from '~media/banners/dino-land-banner.png';
import DraftBotBanner from '~media/banners/draft-bot-banner.png';
import PokedexBanner from '~media/banners/pokedex-banner.png';
import { StickyNavItem } from "~components/StickyNav";
import { CardProps } from "components/Card";

/* ----------- Web Projects ----------- */
export const CardMocksCard: CardProps = {
  link: 'https://mock-cards.web.app/',
  repo: "https://github.com/jubbers/card-mocks/",
  image: CardMocksBanner,
  description: <p>Card Mocks is a tool to help card game designers rapidly prototype their games. Set up a template and drop in your spreadsheet to automatically generate all the cards needed for your next playtest! <br/><br/> Currently just elegant ReactJS + TS (hosted via <a href='https://firebase.google.com/'>Firebase</a>) with expansions planned for a Node backend and AWS tie-ins for user accounts, data storage, and more. <br/><br/>🚧 Please Note: Under Construction! 🚧</p>
}

export const DraftBotCard: CardProps = {
  repo: "https://github.com/jubbers/DraftBot/",
  image: DraftBotBanner,
  invite: 'https://discord.com/oauth2/authorize?client_id=756231279325872199&permissions=0&scope=bot%20applications.commands', 
  description: <p>Draft Bot is a handy Discord Bot to help you with your <a href='https://en.wikipedia.org/wiki/Magic:_The_Gathering'>Magic: The Gathering</a> needs in an easy-to-access place. Look up cards, check their prices, or even start a 'sealed' draft with friends anywhere on the planet! <br/><br/> Super lightweight containerized NodeJS Server running on an old laptop in my laundry room using AWS <a href='https://aws.amazon.com/kms/'>KMS</a> and <a href='https://aws.amazon.com/dynamodb/'>DynamoDB</a> for data storage.</p>
}

export const DinoCard: CardProps = {
  link: "https://people.rit.edu/jtv6445/230/project4/",
  repo: "https://github.com/jubbers/dino-land",
  image: DinoBanner,
  description: <p>Dino land is a DOM-based clicker game. Collect as many dinosaurs as you can as fast as possible. Imagine cookie clicker, but it's dinosaurs so its <em>way</em> cooler. <br/><br/>The whole project is pure HTML, CSS, & JS. No frameworks, package managers, or anything else was used in the projects development.</p>
}

/* ----------- Game Projects ----------- */
export const EggCard: CardProps = {
  link: "https://ianmatic.itch.io/egg",
  repo: "https://github.com/jubbers/egg",
  image: "https://img.itch.zone/aW1hZ2UvMjczMTc5LzEzOTIyNzUuZ2lm/347x500/%2Bn39Xg.gif",
  title: "Egg",
  description: <p>Egg is a cute, quick 2D platformer about finding friends in the middle of a strange, unknown land. I did gameplay dev, tools dev, art, and art pipeline management. <br/><br/> It's written in pure C#, bootstrapping from <a href='https://monogame.net/'>MonoGame</a> as a sprite renderer. Everything else was hand-spun by myself and my team.</p>
}

export const ChangelingCard: CardProps = {
  link: "https://www.youtube.com/watch?v=_XydEZX07_0",
  image: ChangelingBanner,
  description: <p>Changeling is a beautiful and heartbreaking upcoming VR title from RIT's Frameless Labs and the studio Xena Ad Hoc about a family dealing with loss and grief. <br/><br/> I was the founding lead engineer on the project, working on gameplay, systems, VFX, and tools. The game is made in <a href='https://www.unrealengine.com/en-US'>UE4</a> but the repo isn't public, so just imagine really good C++ code and spaghetti blueprints.</p> 
}

export const PokemonCard: CardProps = {
  link: 'https://people.rit.edu/jtv6445/230/project2/',
  repo: 'https://github.com/jubbers/pokedex',
  image: PokedexBanner,
  description: <p>Ever wanted a pokedex that's worse than <a href='https://bulbapedia.bulbagarden.net/wiki/Main_Page'>Bulbapedia</a>, more saturated than an actual rainbow, and only gives you access to info about the first 151 Pokemon? Well it looks like <em>I</em> made the website for <em>you!</em> <br/><br/> This is a super old HTML/CSS/JS project. Nothing fancy, just a barebones site for learning. </p>
}

/* ----------- Header Items ----------- */
export const StickyNavData: StickyNavItem[] = [
  { 
    content: 'Github', href: 'https://github.com/jubbers',
    iconInfo: { iconType: 'github', alt: "Justin's GitHub homepage link" }
  },
  { 
    content: 'LinkedIn', href: 'https://www.linkedin.com/in/justintvaughn/',
    iconInfo: { iconType: 'linkedin', alt: "Justin's LinkedIn homepage link"}
  },
  { 
    content: 'Twitter', href: 'https://twitter.com/sloth__wrangler', 
    iconInfo: { iconType: 'twitter', alt: "Justin's Twitter account link" }
  },
  {
    content: 'Source', href: 'https://github.com/jubbers/portfolio-site-v3',
    iconInfo: { iconType: 'code', alt: 'Source code link for this website'}
  },
  { 
    content: 'Resume', 
    href: 'https://people.rit.edu/jtv6445/resume/jtv_resume_2023_08_20.pdf', 
    download: 'jtv-resume_2023-08-20.pdf',
    iconInfo: { iconType: 'download', alt: 'Resume download button' }
  },
]