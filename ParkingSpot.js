class ParkingSpot {
  constructor(id) {
    this.id = id;
    this.observers = [];
    this.free = true;
    this.vehicle = null;
  }

  // other methods...

  parkVehicle(vehicle) {
    this.free = false;
    this.vehicle = vehicle;
    console.log(`Vehicle ${vehicle.id} is parked at spot ${spot.id}.`);
  }
}

module.export = {
  ParkingSpot,
};
