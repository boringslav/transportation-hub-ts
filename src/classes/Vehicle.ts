export default class Vehicle {
  #makeAndModel: string;
  #licensePlate: string;
  #gasUsagePerKm: number;
  #pricePerKm: number;
  #consumedFuel: number;
  #totalKm: number;
  #type: string;
  #subType: string;

  constructor(
    licensePlate: string,
    totalKm: number,
    makeAndModel?: string,
    gasUsagePerKm?: number
  ) {
    this.#licensePlate = licensePlate;
    this.#totalKm = totalKm;
    this.#consumedFuel = this.#totalKm * this.#gasUsagePerKm;
    if (makeAndModel) {
      this.#makeAndModel = makeAndModel;
    }
    if (gasUsagePerKm) {
      this.#gasUsagePerKm = gasUsagePerKm;
    }
  }

  getVehicleInfo() {
    return {
      makeAndModel: this.#makeAndModel,
      licensePlate: this.#licensePlate,
      gasUsagePerKm: this.#gasUsagePerKm,
      pricePerKm: this.#pricePerKm,
      totalKm: this.#totalKm,
      consumedFuel: this.#consumedFuel,
      type: this.#type,
      subType: this.#subType
    };
  }

  getPricePerKm(): number {
    return this.#pricePerKm;
  }
  calculatePricePerKm(): string {
    this.#pricePerKm = 100 / this.#gasUsagePerKm;
    return this.#pricePerKm.toFixed(2);
  }

  getMakeAndModel(): string {
    return this.#makeAndModel;
  }

  setMakeAndModel(makeAndModel: string): void {
    this.#makeAndModel = makeAndModel;
  }

  getLicensePlate(): string {
    return this.#licensePlate;
  }

  setLicensePlate(licensePlate: string): void {
    this.#licensePlate = licensePlate;
  }

  getGasUsagePerKm(): number {
    return this.#gasUsagePerKm;
  }

  setGasUsagePerKm(gasUsagePerKm: number): void {
    this.#gasUsagePerKm = gasUsagePerKm;
  }

  calculateConsumedFuel(): string {
    this.#consumedFuel = this.#totalKm * this.#gasUsagePerKm;
    return this.#consumedFuel.toFixed(2);
  }

  getConsumedFuel(): number {
    return this.#consumedFuel;
  }

  setTotalKm(totalKm: number): void {
    this.#totalKm = totalKm;
  }

  getTotalKm(): number {
    return this.#totalKm;
  }

  getType(): string {
    return this.#type;
  }

  setType(type: string): void {
    this.#type = type;
  }

  getSubType(): string {
    return this.#subType;
  }

  setSubType(subType: string): void {
    this.#subType = subType;
  }
}
