import Passenger from "../Passenger";

export default class VanP extends Passenger {
    constructor(
        maxPassengers: number,
        licensePlate: string,
        totalKm: number,
        makeAndModel?: string,
        gasUsagePerKm?: number){
        super(maxPassengers,licensePlate,totalKm,makeAndModel,gasUsagePerKm);
        this.type="Van";
        this.subType="Passenger";
        }
    
}