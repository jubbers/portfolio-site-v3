import * as React from 'react';
import CardRow from 'layouts/CardRow';
import Header from 'components/Header';
import StickyNav from '~components/StickyNav';
import { DraftBotCard, DinoCard, ChangelingCard, EggCard, CardMocksCard, PokemonCard } from './PageData';


export default () => (
  <>
    <Header />
    <StickyNav />
    <CardRow 
      id='web'
      title='Fancy Projects' 
      description='Two helpful tools and one cute game.'
      cardInfo={[CardMocksCard, DraftBotCard, DinoCard]} />
    <CardRow 
      id='games'
      title='Game Dev' 
      description='A few examples of some of the cool game dev projects I have worked on over the years.'
      cardInfo={[EggCard, ChangelingCard, PokemonCard]} />
  </>
);
