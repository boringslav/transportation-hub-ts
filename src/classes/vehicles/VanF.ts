
import Freighter from "../Freighter";

export default class VanF extends Freighter {
    constructor( 
        licensePlate: string,
        totalKm: number,
        maxWeight: number,
        maxVolume: number,
        makeAndModel?: string,
        gasUsagePerKm?: number){
    super(licensePlate,totalKm,maxWeight,maxVolume,makeAndModel,gasUsagePerKm);
            this.type="Van";
            this.subType="Freighter";
    }

}