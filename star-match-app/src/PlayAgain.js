import React from "react";

const PlayAgain = (props) => (
  <div className="game-done">
    <div
      className="message"
      style={{ color: props.gameStatus === "won" ? "green" : "red" }}
    >
      {props.gameStatus === "won" ? "Nice" : "Game over"}
    </div>
    <button onClick={() => props.onClick()}>Play Again</button>
  </div>
);

export default PlayAgain;
