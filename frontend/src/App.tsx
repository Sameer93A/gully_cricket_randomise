import { useState } from "react";
import "./App.css";
import { InputBox } from "./components/InputBox";
import { PlayerBox } from "./components/PlayerBox";
import { Submit } from "./components/Submit";
import axios from "axios";
import { RenderData } from "./components/RenderData";

function App() {
  const [firstCaptainName, setFirstCaptainName] = useState("");
  const [secondCaptainName, setSecondCaptainName] = useState("");
  const [playerName, setPlayerName] = useState("");
  const [randomPlayerData, setRandomPlayerData] = useState({});

  async function handleSubmit() {
    const playerNamesArray = playerName.split(",").map((name) => name.trim());
    const data = {
      firstCaptain: firstCaptainName,
      secondCaptain: secondCaptainName,
      playerName: playerNamesArray,
    };

    const randomPlayer = await axios.post(
      "http://localhost:8787/api/v1/captain",
      data
    );
    setRandomPlayerData(randomPlayer.data);
  }
  return (
    <div>
      <h1 className="flex justify-center text-xl pb-4 font-bold">
        Randomize Your Team
      </h1>
      <InputBox
        onChange={(e) => {
          setFirstCaptainName(e.target.value);
        }}
        Name="First Captain Name"
        placeholder="Enter Captain Name"
      />
      <InputBox
        onChange={(e) => {
          setSecondCaptainName(e.target.value);
        }}
        Name="Second Captain Name"
        placeholder="Enter Captain Name"
      />
      <PlayerBox
        onChange={(e) => {
          setPlayerName(e.target.value);
        }}
        Name="Player Name"
        placeholder="Enter player Name"
      ></PlayerBox>
      <Submit onClick={handleSubmit}></Submit>
      {Object.keys(randomPlayerData).length > 0 && (
        <div>
          <h1>Random Player Names:</h1>
          <ul>
            {Object.keys(randomPlayerData).map((playerName, index) => (
              <li key={index}>{playerName}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
