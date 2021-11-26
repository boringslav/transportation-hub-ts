import React from "react";
import Vehicle from "./classes/Vehicle";
import Freighter from "./classes/Freighter";
import Passenger from "./classes/Passsenger";
function App() {
  const v1: Vehicle = new Vehicle("Booo", 1.4, "Mercedes", 14);
  v1.calculatePricePerKm();
  v1.calculateConsumedFuel();

  const f1: Freighter = new Freighter("bobko", 100, 2000, 150, "Truck", 10);
  f1.calculatePricePerKm();
  f1.calculateConsumedFuel();

  const p1: Passenger = new Passenger(
    10,
    "booob",
    100,
    "porsche panamera turbo s",
    1.5
  );
  p1.calculatePricePerKm();
  p1.calculateConsumedFuel();

  console.log(f1.getVehicleInfo());
  console.log(v1.getVehicleInfo());
  console.log(p1.getVehicleInfo());

  return <div className="App"></div>;
}

export default App;
