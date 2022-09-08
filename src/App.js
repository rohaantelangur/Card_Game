import "./App.css";
import { SetData } from "./Components/Data";
import { DisplayCard } from "./Components/DisplayCard";
import { Show } from "./Components/Show";
import { useEffect, useState } from "react";

function App() {
  const [CardSet, setCardSet] = useState([]);
  const [PlayCard, setPlayCard] = useState([]);
  const [Scores, setScores] = useState(0);
  const [gameOver, setgameOver] = useState(false);
  const [reset, setreset] = useState(false)

  const RandamData = async () => {
    let Data = await SetData();
    console.log(Data);
    setCardSet(Data);
  };

  const CheckGameOver = () => {
    if (
      CardSet[0]?.length === 0 ||
      CardSet[1]?.length === 0 ||
      CardSet[2]?.length === 0 ||
      CardSet[3]?.length === 0 ||
      CardSet[4]?.length === 0
    ) {
      setgameOver(true);
    }
  };

  const CheckScores = () => {
    if (PlayCard.length === 5) {
      const redColour = PlayCard.filter((item) => item.colour === "red");
      const blackColour = PlayCard.filter((item) => item.colour === "black");
      if (redColour.length === 5 || blackColour === 5) {
        setScores(Scores + 5);
      } else if (redColour.length === 4 || blackColour === 4) {
        setScores(Scores + 1);
      } else if (redColour.length === 3 || blackColour === 3) {
        setScores(Scores + 2);
      }
      console.log(Scores, "Scores");
      setTimeout(() => {
        setPlayCard([]);
      }, 100);
    }
  };
  const handleRestart = () => {
    setPlayCard([]);
    setScores(0);
    setreset(!reset)
  };
  function handleQuit() {
    window.confirm("Are You Sure Want To Quit The Game");
  }

  useEffect(() => {
    RandamData();
  }, [reset]);

  useEffect(() => {
    CheckScores();
    CheckGameOver();
  }, [PlayCard.length]);

  return (
    <div className="App">
      <div className="head">
        <button onClick={handleRestart}>Restart</button>
        <h1>Card Game</h1>
        <button onClick={handleQuit}>Quit</button>
      </div>
      <div class={gameOver ? "overlay" : "overlayShow"}>
        <div class="popup">
          <h2>You Score: {Scores}</h2>
          <span
            class="close"
            onClick={() => {
              setgameOver(false);
              handleRestart();
            }}
          >
            &times;
          </span>
        </div>
      </div>

      <div className="AppShow">
        <Show
          Set={CardSet[0]}
          CardSet={CardSet}
          SetName={0}
          setCardSet={setCardSet}
          setPlayCard={setPlayCard}
          PlayCard={PlayCard}
        />
        <Show
          Set={CardSet[1]}
          CardSet={CardSet}
          SetName={1}
          setCardSet={setCardSet}
          setPlayCard={setPlayCard}
          PlayCard={PlayCard}
        />
        <Show
          Set={CardSet[2]}
          CardSet={CardSet}
          SetName={2}
          setCardSet={setCardSet}
          setPlayCard={setPlayCard}
          PlayCard={PlayCard}
        />
        <Show
          Set={CardSet[3]}
          CardSet={CardSet}
          SetName={3}
          setCardSet={setCardSet}
          setPlayCard={setPlayCard}
          PlayCard={PlayCard}
        />
        <Show
          Set={CardSet[4]}
          CardSet={CardSet}
          SetName={4}
          setCardSet={setCardSet}
          setPlayCard={setPlayCard}
          PlayCard={PlayCard}
        />
        <DisplayCard Set={PlayCard} />
      </div>
    </div>
  );
}

export default App;
