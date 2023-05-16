import { CardProps } from "components/Card";
import * as React from "react";
import DinoBanner from '~media/banners/dino-land-banner.png'
import ChangelingBanner from '~media/banners/changeling-banner.png'

export const EggCard: CardProps = {
  link: "https://ianmatic.itch.io/egg",
  repo: "https://github.com/saint-justin/egg",
  image: "https://img.itch.zone/aW1hZ2UvMjczMTc5LzEzOTIyNzUuZ2lm/347x500/%2Bn39Xg.gif",
  title: "Egg",
  description: <p>Egg is a cute, quick game about a finding friends. It's written in pure C#, bootstrapping from <a href='https://monogame.net/'>MonoGame</a> as a sprite renderer. Everything else was hand-spun by myself and my team.</p>
}

export const DinoCard: CardProps = {
  link: "https://people.rit.edu/jtv6445/230/project4/",
  repo: "https://github.com/saint-justin/dino-land",
  image: DinoBanner,
  title: "",
  description: <p>Dino land is a DOM-based clicker game. Get as many dinos as fast as possible. The whole project is pure HTML/CSS/JS, no frameworks or other tools were used. No dinosaurs were harmed in the making of this game.</p>
}

export const ChangelingCard: CardProps = {
  link: "https://www.youtube.com/watch?v=_XydEZX07_0",
  image: ChangelingBanner,
  title: "",
  description: <p>Changeling is an upcoming VR title from RIT's Frameless Labs and the studio Xena Ad Hoc. I was the founding lead engineer on the project, working on gameplay, systems, VFX, and more. The game is made in <a href='https://www.unrealengine.com/en-US'>UE4</a> but the repo isn't public, so just imagine really good C++ code.</p> 
}