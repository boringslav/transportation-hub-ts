export default interface IPassenger {
  maxPassengers: number;
  setPassengers(passengers: number): void;
  getPassengers(): number;
}
