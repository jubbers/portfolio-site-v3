import * as React from 'react';
import CardRow from 'layouts/CardRow';
import { DinoCard, EggCard } from './PageData';

export default () => (
  <CardRow 
    title='Neat Games' 
    description='A few examples of some of the cool game dev projects I have worked on over the years.'
    cardInfo={[EggCard, DinoCard]} 
  />
);
