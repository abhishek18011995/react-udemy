import React, { useState } from "react";
import "./App.css";
import Game from "./Game";
// import StarsDisplay from "./StarsDisplay";
// import PlayNumber from "./PlayNumber";
// import PlayAgain from "./PlayAgain";

const StarMatch = (props) => {
  const [gameId, setGameId] = useState(1);
  return <Game key={gameId} newGame={() => setGameId(gameId + 1)} />;
};

function App() {
  return <StarMatch />;
}

export default App;
