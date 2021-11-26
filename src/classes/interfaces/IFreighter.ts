export default interface IFreighter {
  maxWeight: number;
  maxVolume: number;

  getMaxWeight(): number;
  getMaxVolume(): number;
  setMaxWeight(maxWeight: number): void;
  setMaxVolume(maxVolume: number): void;
}
