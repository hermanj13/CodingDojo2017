function VehicleConstructor(name, wheels, passengers, speed) {
    if (!(this instanceof VehicleConstructor)) {
        return new VehicleConstructor(name, wheels, passengers, speed);
    }
    this.name = name;
    this.wheels = wheels;
    this.passengers = passengers;
    this.speed = speed;
    this.vin = Math.floor(Math.random() * 500000000) + 1
}

VehicleConstructor.prototype.distance_traveled = 0
VehicleConstructor.prototype.makeNoise = function() {
    console.log("Vrummmmmmmmmmm");
    return this;
}
VehicleConstructor.prototype.checkMiles = function() {
    console.log(this.distance_traveled);
    return this;
};
VehicleConstructor.prototype.move = function() {
    this.updateDistanceTraveled();
    this.makeNoise();
    return this
};
VehicleConstructor.prototype.updateDistanceTraveled = function() {
    this.distance_traveled += this.speed;
    console.log(this.distance_traveled);
    return this;
}

bike = new VehicleConstructor('Bike', 2, 1, 3)
bike.makeNoise = function() {
    console.log("ring ring!")
}
bike.checkMiles().move().checkMiles()

sedan = new VehicleConstructor('Sedan', 4, 7, 50)
sedan.makeNoise = function() {
    console.log("Honk Honk!")
}
sedan.checkMiles()

bus = new VehicleConstructor('Bus', 8, 1, 40)
bus.pickUp = function(num) {
    bus.passengers += num
    return bus
}
bus.checkMiles()
