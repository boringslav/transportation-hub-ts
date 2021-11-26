import Vehicle from './classes/Vehicle';

const v1: Vehicle = new Vehicle('Booo', 1.4, 'Mercedes', 14);
v1.calculatePricePerKm();
v1.calculateConsumedFuel();
console.log(v1.getVehicleInfo());
