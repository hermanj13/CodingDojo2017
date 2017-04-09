function VehicleConstructor(name, wheels, passengers) {
    var vehicle = {};
    vehicle.name = name;
    vehicle.wheels = wheels;
    vehicle.passengers = passengers;

    vehicle.makeNoise = function() {
        console.log("Vrummmmmmmmmmmmm")
    }

    return vehicle
}

bike = VehicleConstructor('Bike', 2, 1)
bike.makeNoise = function() {
    console.log("ring ring!")
}
bike.makeNoise()

sedan = VehicleConstructor('Sedan', 4, 7)
sedan.makeNoise = function() {
    console.log("Honk Honk!")
}
sedan.makeNoise()

bus = VehicleConstructor('Bus', 8, 1)
bus.pickUp = function(num) {
    bus.passengers += num
    return bus
}
console.log(bus.passengers)
bus.pickUp(5)
console.log(bus.passengers)
bus.makeNoise()
