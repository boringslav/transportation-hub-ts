import Vehicle from './classes/Vehicle';
import Freighter from './classes/Freighter';

const v1: Vehicle = new Vehicle('Booo', 1.4, 'Mercedes', 14);
v1.calculatePricePerKm();
v1.calculateConsumedFuel();
const f1: Freighter = new Freighter('bobko', 100, 2000, 150, 'Truck', 10);
f1.calculatePricePerKm();
f1.calculateConsumedFuel();
console.log(f1.getVehicleInfo());
console.log(v1.getVehicleInfo());
