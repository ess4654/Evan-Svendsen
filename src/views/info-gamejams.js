import React, { PureComponent, memo } from "react";

import {
    Info,
    Game
} from './index';

export class InfoGameJams extends PureComponent
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    return(
    <>
    <Info id="jams" title="Game Jams">
        <Game
          name="Rootin Tootin Meowin Shootin"
          href="https://globalgamejam.org/2023/games/cat-game-8"
          year="2023"
          jam="Global Game Jam"
          description="You play as Chester the Cat as he works to weed out his garden of mutant beats and other pests that have been desecrating his cops. Throw water balloons to destroy the targets and save you garden! To Play: Press the E key to plant seed in plots of dirt on your farm. When the beats grow they will either become friendly plants that can be collected for more seeds or become horrible mutant monsters that will attack you. Throw water balloons at them to defend yourself and keep your farm safe. Controls: WASD - Move E - Plant Seeds 1 - Equip Waterballoon 2 - Equip Shotgun Left Click - Throw/Fire"
          screenshot="https://ggj.s3.amazonaws.com/styles/game_sidebar__wide/featured_image/2023/02/204044/feature_image.png?itok=WKshyyar&timestamp=1675636985"
        />

        <Game
          name="Double Agent"
          href="https://itch.io/jam/alberta-game-jam-2022/rate/1672207"
          year="2022"
          jam="Alberta Game Jam"
          description={<>
            Being undercover behind enemy lines may be a dangerous job with little in the way of thanks, but it has it's perks depending on how you look at it, and as it turns out, your license to kill usually only covers collateral damage. But there's really no way that your new employer could judge what is and isn't collateral damage, right?
            <br/>So that is your assignment; cause our enemies as much headache as you can get away with whilst maintaining a shroud of plausible deniability. You will ultimately be forced to act in ways that are detrimental to our goals, but if it wasn't you it would be someone else, so try to at least get some value out of it. Just don't get caught.
            <br/>Good luck, and glory to Rodinata!
          </>}
          descriptionStyle={{fontSize: 14}}
          screenshot="https://img.itch.zone/aW1nLzk4NDYxNjYucG5n/315x250%23c/NORlvr.png"
        />

        <Game
          name="Floating Point Exception"
          href="https://globalgamejam.org/2022/games/floating-point-exception-8"
          year="2022"
          jam="Global Game Jam"
          description="In a world overrun by a new generation of ruthless technocratic monarchs, how would you revolt? Would you fight, or would you fly? Or would you accept that sometimes the only way to survive is to do both? Floating Point Exception is a 2D action platformer in which you must swap between a reflection of honesty and deception in order to fight and outrun the overwhelming forces that seek to inhibit your goals. Will you find the reason for this tear in reality that has overcome your senses? Or just another lie that the tyrants in power have fed you your whole life?"
          screenshot="https://ggj.s3.amazonaws.com/styles/game_sidebar__wide/featured_image/2022/01/204044/screenshot_1.png?itok=uqis6pGV&timestamp=1643582560"
        />

        <Game
          name="Maquai'a's Reawakening"
          href="https://itch.io/jam/alberta-game-jam-2021/rate/1160607"
          year="2021"
          jam="Alberta Game Jam"
          description={<>
          St Pierre Tribune
          <br/>Numerous Residents Report Nightmares of Lord Maquai'a's Rising!
          <br/>August 15th, 1912
          <br/>What might otherwise seem to be an ordinary nightmare pertaining to the old myths which permeate history has shaken the residents of Pierre, as the same nightmare about such mythos have been reported to have been experienced by 100's simultaneously across the coastline. According to local resident Diana Birchwood, the dream consisted of 'a small room made up of flesh of an otherwise indescribable shape,' inhabited by a large being consisting of 'slimey skin, with a mole like face with large, leathery eyes.' The cosmic creature describes itself as 'a fallen king of the stars, a god who feasts off pain for taste alone.' If you've inhabited this town long enough, this tale probably sounds familiar, as the residence describe the entity as none other than 'The Dark Lord Maquai'a.'
          <br/>Created in under 48 hours for Alberta Game Jam 2021.
          </>}
          descriptionStyle={{fontSize: 14}}
          screenshot="https://img.itch.zone/aW1nLzY3NDg2MzkuanBn/315x250%23c/gDEFeS.jpg"
        />

        <Game
          name="Bag O' Quests"
          href="https://globalgamejam.org/2021/games/bag-quests-6"
          year="2021"
          jam="Global Game Jam"
          description="Treasure, strength, divinity and fame, what more doth this Bag O' Quests contain? After an unwitting necromancer brings about the dawning of the last judgement, it is up to an unwitting knight of the Kingdom of Condor to disrupt Beelzebub's servants and save the world as we know it. In an adventure where your choices matter, will you be the legendary hero that the realm needs, or will you prove thyself the village idiot that the town expects?"
          screenshot="https://ggj.s3.amazonaws.com/styles/game_sidebar__wide/featured_image/2021/01/341682/bagoquestsicon.jpg?itok=G25ctJag&timestamp=1612130823"
        />

        <Game
          name="Interior Designer 101"
          href="https://globalgamejam.org/2019/games/interior-designer-101"
          year="2019"
          jam="Global Game Jam"
          description="Interior Designer 101 is a game where players work together to furnish a brand new procedurally generated home. Each round, players will choose furniture to place in the active room, and when the game is complete, your beautiful new home is revealed. Ooooooohhhhhh Ahhhhhh! Points are awarded for placing the furniture in the appropriately room, and room labels don't get applied till after the furniture is thrown around a bit."
          screenshot="https://ggj.s3.amazonaws.com/styles/game_sidebar__wide/featured_image/2019/01/204044/character_login_page.jpg?itok=nzNzdD4d&timestamp=1548629530"
        />

        <Game
          name="Fatal Error"
          href="https://globalgamejam.org/2018/games/fatal-error"
          year="2018"
          jam="Global Game Jam"
          description="An asymmetric two player survival game based on real time crisis management. Player 1 is given data that they must interpret before communicating it to Player 2, who must then use the information to solve problems. The errors that occur require different numbers of actions and different amount of time to solve. Since Player 1 cannot fix problems directly, success depends on the effective communication of instructions to Player 2 via text."
          screenshot="https://ggj.s3.amazonaws.com/styles/game_sidebar__wide/game/featured_image/003_3.png?itok=VKwm9u-k&timestamp=1517183866"
        />
    </Info>
    </>
    );
  }
}

export default memo(InfoGameJams);