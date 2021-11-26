import Freighter from "../Freighter";
import IFreighter from "../interfaces/IFreighter";

export default class Truck extends Freighter implements IFreighter {

    constructor(
        licensePlate: string,
        totalKm: number,
        maxWeight: number,
        maxVolume: number,
        makeAndModel?: string,
        gasUsagePerKm?: number
    ){
        super(licensePlate,totalKm,maxWeight,maxVolume,makeAndModel,gasUsagePerKm);
        this.type = "Truck";
        this.subType = "Freighter";
    }

}