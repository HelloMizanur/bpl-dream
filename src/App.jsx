import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomePageComponent from "./components/HomePageComponent";

const App = () => {
  const [players, setPlayers] = useState([]);
  const [coins, setCoins] = useState(5000);
  const [selectedPlayer, setSelectedPlayer] = useState([]);
  const [selectedButn, setSelectedButn] = useState("available");
  useEffect(() => {
    const url = `/data.json`;
    const fetchData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setPlayers(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Navbar coins={coins} />
      <Hero />

      <HomePageComponent
        setPlayers={setPlayers}
        selectedButn={selectedButn}
        setSelectedButn={setSelectedButn}
        setCoins={setCoins}
        coins={coins}
        selectedPlayer={selectedPlayer}
        setSelectedPlayer={setSelectedPlayer}
        players={players}
      />
    </div>
  );
};

export default App;
