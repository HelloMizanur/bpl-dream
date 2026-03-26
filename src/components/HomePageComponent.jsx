import Card from "./Card";

const HomePageComponent = ({
  setPlayers,
  setSelectedButn,
  selectedButn,
  players,
  setCoins,
  coins,
  setSelectedPlayer,
  selectedPlayer,
}) => {
  if (selectedButn !== "available") {
    setPlayers(selectedPlayer);
  }
  return (
    <>
      <div className="px-5 md:px-20 py-10">
        <div className="flex justify-between items-center">
          <span className="text-3xl">Available Player : {players.length}</span>
          <div className="">
            <button
              onClick={() => setSelectedButn("available")}
              className={`btn btn-default ${selectedButn === "available" ? "bg-amber-400" : ""}`}
            >
              Available
            </button>
            <button
              onClick={() => setSelectedButn("selected")}
              className={`btn btn-default ${selectedButn === "selected" ? "bg-amber-400" : ""}`}
            >
              Selected ( {selectedPlayer.length} )
            </button>
          </div>
        </div>
        <div className="pt-5 flex flex-wrap gap-5 justify-center md:justify-between ">
          {players.map((player, index) => (
            <Card
              selectedPlayer={selectedPlayer}
              setSelectedPlayer={setSelectedPlayer}
              setCoins={setCoins}
              coins={coins}
              key={index}
              player={player}
              selectedButn={selectedButn}
              setSelectedButn={setSelectedButn}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePageComponent;
