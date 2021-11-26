import IPassenger from "./interfaces/IPassenger";
import Vehicle from "./Vehicle";

export default class Passenger extends Vehicle implements IPassenger {
    maxPassengers: number;

constructor(
    maxPassengers: number,
    licensePlate: string,
    totalKm: number,
    makeAndModel?: string,
    gasUsagePerKm?: number){
    super(licensePlate,totalKm,makeAndModel,gasUsagePerKm);
    this.maxPassengers = maxPassengers;
}

    getVehicleInfo():object {
        const vehicleInfo = super.getVehicleInfo();
        return {...vehicleInfo, maxPassengers:this.maxPassengers}
    }

    setPassengers(passengers: number): void {
        this.maxPassengers = passengers;
    }
    getPassengers(): number {
        return this.maxPassengers;
    }
    

}