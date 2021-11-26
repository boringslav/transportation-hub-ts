import React from "react";
import Vehicle from "./classes/Vehicle";
import Freighter from "./classes/Freighter";
import Passenger from "./classes/Passenger";
import Car from "./classes/vehicles/Car";
import VanF from "./classes/vehicles/VanF";
import VanP from "./classes/vehicles/VanP";

function App() {
  const v1: VanF = new VanF("borko", 10, 1000, 20, "vanFr", 3);
  v1.calculatePricePerKm();
  v1.calculateConsumedFuel();

  const v2: VanP = new VanP(12, "nzz", 60, "audi", 1.5);

  v2.calculatePricePerKm();
  v2.calculateConsumedFuel();

  console.log(v1.getVehicleInfo());
  console.log(v2.getVehicleInfo());

  return <div className="App"></div>;
}

export default App;
