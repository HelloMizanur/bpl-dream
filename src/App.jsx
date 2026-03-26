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
      const data = await res.json();
      setPlayers(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <HomePageComponent players={players} />
    </div>
  );
};

export default App;
