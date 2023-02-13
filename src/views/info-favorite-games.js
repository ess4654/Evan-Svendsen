import React, { PureComponent, memo } from "react";

import {
    Info,
    GameCardMini
} from './index';

import {
    heroes5,
    castlevania,
    witcher3,
    hogwarts,
    legoStarwars
} from "../img/favorite-games";

export class InfoFavoriteGames extends PureComponent
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    return(
    <>
    <Info id="favorite-games" title="Favorite Games">
    <div className="d-flex flex-wrap">
        <GameCardMini
            name="Heroes of Might and Magic 5"
            icon={heroes5}
        />

        <GameCardMini
            name="Castlevania SOTN"
            icon={castlevania}
        />

        <GameCardMini
            name="The Witcher 3"
            icon={witcher3}
        />

        <GameCardMini
            name="Hogwarts Legacy"
            icon={hogwarts}
        />

        <GameCardMini
            name="Lego Starwars 2"
            icon={legoStarwars}
        />
    </div>
    </Info>
    </>
    );
  }
}

export default memo(InfoFavoriteGames);