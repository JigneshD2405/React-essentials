import GameBoard from "./components/GameBoard.jsx";
import Player from "./components/Player.jsx";
function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player 1" symbol="O" />
          <Player initialName="Player 2" symbol="X" />
        </ol>
        <GameBoard />
      </div>
    </main>
  );
}

export default App;
