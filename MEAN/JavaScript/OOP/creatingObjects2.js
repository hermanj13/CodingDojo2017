function VehicleConstructor(name, wheels, passengers, speed) {
    if (!(this instanceof VehicleConstructor)) {
        return new VehicleConstructor(name, wheels, passengers, speed);
    }
    var self = this;
    var distance_traveled = 0;
    var updateDistanceTraveled = function() {
        distance_traveled += self.speed
    }
    this.name = name;
    this.wheels = wheels;
    this.passengers = passengers;
    this.speed = speed;
    this.makeNoise = function() {
        console.log("Vrummmmmmmmmmmmm")
        return this
    }
    this.move = function() {
        updateDistanceTraveled();
        this.makeNoise();
        return this
    }
    this.checkMiles = function() {
        console.log(distance_traveled)
        return this
    }
}

bike = new VehicleConstructor('Bike', 2, 1, 3)
bike.makeNoise = function() {
    console.log("ring ring!")
}
bike.checkMiles().move().checkMiles().move().checkMiles().move().checkMiles()

sedan = new VehicleConstructor('Sedan', 4, 7, 50)
sedan.makeNoise = function() {
    console.log("Honk Honk!")
}

bus = new VehicleConstructor('Bus', 8, 1, 40)
bus.pickUp = function(num) {
    bus.passengers += num
    return bus
}
