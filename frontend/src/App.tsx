import { useState } from "react";
import "./App.css";
import { InputBox } from "./components/InputBox";
import { PlayerBox } from "./components/PlayerBox";
import { Submit } from "./components/Submit";
import axios from "axios";

function App() {
  const [firstCaptainName, setFirstCaptainName] = useState("");
  const [secondCaptainName, setSecondCaptainName] = useState("");
  const [playerName, setPlayerName] = useState("");

  async function handleSubmit() {
    const data = {
      firstCaptain: firstCaptainName,
      secondCaptain: secondCaptainName,
      playerName: [playerName],
    };
    const randomPlayer = await axios.post("/api/v1/captain", data);
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
    </div>
  );
}

export default App;
