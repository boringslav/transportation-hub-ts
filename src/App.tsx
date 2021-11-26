import React from "react";
import Vehicle from "./classes/Vehicle";
import Freighter from "./classes/Freighter";
import Passenger from "./classes/Passenger";
import Car from "./classes/vehicles/Car";
function App() {
  const p1: Passenger = new Passenger(
    10,
    "booob",
    100,
    "porsche panamera turbo s",
    1.5
  );

  const c1: Car = new Car(4, "borko", 100, "Audi", 1);
  c1.calculatePricePerKm();
  c1.calculateConsumedFuel();

  p1.calculatePricePerKm();
  p1.calculateConsumedFuel();

  console.log(p1.getVehicleInfo());
  console.log(c1.getVehicleInfo());

  return <div className="App"></div>;
}

export default App;
