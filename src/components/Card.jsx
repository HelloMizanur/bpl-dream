import React, { useState } from "react";

const Card = ({
  player,
  setCoins,
  coins,
  setSelectedPlayer,
  selectedPlayer,
}) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = (player) => {
    setIsClicked(true);
    setCoins(coins - player.player_price);
    setSelectedPlayer([...selectedPlayer, player]);
  };
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{player.player_name}</h2>
        <p>{player.player_price}</p>
        <div className="card-actions justify-between">
          <button className="btn btn-primary">{player.player_country}</button>
          <button
            onClick={() => handleClick(player)}
            className="btn btn-success"
            disabled={isClicked}
          >
            Selected
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
