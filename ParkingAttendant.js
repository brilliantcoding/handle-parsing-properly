class ParkingAttendant {
  constructor() {
    this.waitingVehicles = [];
  }

  update(spot) {
    console.log(`Spot ${spot.id} is now free.`);
    // Check available spots and react accordingly
    if (this.waitingVehicles.length > 0) {
      // Allocate the free spot to the first waiting vehicle
      let vehicle = this.waitingVehicles.shift();
      spot.parkVehicle(vehicle);
      console.log(`Vehicle ${vehicle.id} parked at spot ${spot.id}.`);
    }
  }

  addVehicleToWaitingList(vehicle) {
    this.waitingVehicles.push(vehicle);
  }
}
module.export = {
  ParkingAttendant,
};
