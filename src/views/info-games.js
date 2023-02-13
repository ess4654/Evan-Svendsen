import React, { PureComponent, memo } from "react";

import {
    Info,
    Game
} from './index';

export class InfoGames extends PureComponent
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    return(
    <>
    <Info id="games" title="Games Published">
        <Game
          name="Halloween Decoration Sandbox"
          href="https://store.steampowered.com/app/1438750/Halloween_Decoration_Sandbox/"
          description={<>
            An open world Sandbox game that allows you to decorate using a variety of Halloween decorations, then walk around trick or treating in VR.
            <br/><br/>
            <ul>
              <li>Modify terrain in an open world sandbox map editor.</li>
              <li>Place scenery around the world.</li>
              <li>Add Halloween decorations to the sandbox.</li>
              <li>Walk around with your character trick or treating collecting candy throughout the sandbox.</li>
            </ul>
          </>}
          screenshot="https://cdn.cloudflare.steamstatic.com/steam/apps/1438750/extras/Decorate.gif?t=1667210794"
        />

        <Game
          name="Bare Backstreets"
          href="https://jasonafex.itch.io/bare-backstreets"
          description="18+ Adult. BBS is a high-octane side scrolling brawler packed to the brim with adults-only content. Every enemy you encounter is out for you in more ways than one. Tackle 6 unique stages ranging from the corrupt underbelly of the city, to the tropical jungle and it's hidden ancient prophecy."
          screenshot="https://i.ytimg.com/vi/YWb9Yy7OLmQ/hqdefault.jpg"
        />
    </Info>
    </>
    );
  }
}

export default memo(InfoGames);