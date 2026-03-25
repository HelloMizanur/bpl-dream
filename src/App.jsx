import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomePageComponent from "./components/HomePageComponent";

const App = () => {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    const url = `/data.json`;
    const fetchData = async () => {
      const res = await fetch(url);
      setPlayers(res.json);
    };
    fetchData();
  }, []);
  console.log(players);
  return (
    <div>
      <Navbar />
      <Hero />
      <HomePageComponent />
    </div>
  );
};

export default App;
