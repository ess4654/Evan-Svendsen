import React, { PureComponent, memo } from "react";
import { newgrounds, steam } from "../img/platforms";
import { HalloweenDecorationSandbox, IndustrialShapes, Bolletji } from "../img/games";

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
          screenshot={HalloweenDecorationSandbox}
          cornerIcon={steam}
        />
        
        {/*<Game
          name="Bare Backstreets"
          href="https://jasonafex.itch.io/bare-backstreets"
          description="18+ Adult. BBS is a high-octane side scrolling brawler packed to the brim with adults-only content. Every enemy you encounter is out for you in more ways than one. Tackle 6 unique stages ranging from the corrupt underbelly of the city, to the tropical jungle and it's hidden ancient prophecy."
          screenshot="https://i.ytimg.com/vi/YWb9Yy7OLmQ/hqdefault.jpg"
          cornerIcon={steam}
        />*/}

        <Game
          name="Industrial Shapes"
          href="https://www.newgrounds.com/portal/view/751811"
          description="Industrial Shapes is a game where you play as either a circle, a triangle, or a square. You must avoid shapes that do not match and navigate your way through each level to advance to the next while avoiding obstacles in your path."
          screenshot={IndustrialShapes}
          cornerIcon={newgrounds}
        />

        <Game
          name="Bolletji"
          href="https://www.newgrounds.com/portal/view/657500"
          description="Bolletjie is an enjoyable puzzle game with the objective of clearing the screen of colored balls. By selecting balls of the same color; the puzzle can be unravelled to determine the winning order of moves. Limited moves will be provided, so the correct order is required to win."
          screenshot={Bolletji}
          cornerIcon={newgrounds}
        />
    </Info>
    </>
    );
  }
}

export default memo(InfoGames);