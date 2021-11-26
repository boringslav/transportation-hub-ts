import IPassenger from "../interfaces/IPassenger";
import Passenger from "../Passenger";

export default class Car extends Passenger implements IPassenger {

    constructor(maxPassengers: number,
        licensePlate: string,
        totalKm: number,
        makeAndModel?: string,
        gasUsagePerKm?: number){
        super(maxPassengers,licensePlate,totalKm,makeAndModel,gasUsagePerKm);
        this.type = "Car";
        this.subType = "Passenger";
    }


} 