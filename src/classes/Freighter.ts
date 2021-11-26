import IFreighter from './interfaces/IFreighter';
import Vehicle from './Vehicle';

export default class Freighter extends Vehicle implements IFreighter {
  maxWeight: number;
  maxVolume: number;
  constructor(
    licensePlate: string,
    totalKm: number,
    maxWeight: number,
    maxVolume: number,
    makeAndModel?: string,
    gasUsagePerKm?: number
  ) {
    //call the base constructor
    super(licensePlate, totalKm, makeAndModel, gasUsagePerKm);
    this.maxWeight = maxWeight;
    this.maxVolume = maxVolume;
    this.subType = 'Freighter';
  }
  getVehicleInfo(): object {
    const baseVehicleInfo = super.getVehicleInfo();
    return {
      ...baseVehicleInfo,
      maxVolume: this.maxVolume,
      maxWeight: this.maxWeight
    };
  }
  getMaxWeight(): number {
    return this.maxWeight;
  }
  getMaxVolume(): number {
    return this.maxVolume;
  }
  setMaxWeight(maxWeight: number): void {
    this.maxWeight = maxWeight;
  }
  setMaxVolume(maxVolume: number): void {
    this.maxVolume = maxVolume;
  }
}
