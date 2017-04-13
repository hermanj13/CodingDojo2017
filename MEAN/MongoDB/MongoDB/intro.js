// Create 'my_first_db' database
use my_first_db;
// Create student collection
db.createColletion('student');
// Create 5 students
db.student.insert({
    name: 'Jake',
    home_state: 'VA',
    lucky_number: 7,
    birthday: {
        month: 7,
        day: 30,
        year: 1995
    }
});
db.student.insert({
    name: 'Rae',
    home_state: 'NY',
    lucky_number: 13,
    birthday: {
        month: 4,
        day: 14,
        year: 2000
    }
});
db.student.insert({
    name: 'Jingles',
    home_state: 'FL',
    lucky_number: 0,
    birthday: {
        month: 8,
        day: 13,
        year: 2018
    }
});
db.student.insert({
    name: 'Jedi',
    home_state: 'VA',
    lucky_number: 1,
    birthday: {
        month: 2,
        day: 1,
        year: 1995
    }
});
db.student.insert({
    name: 'Jason',
    home_state: 'MD',
    lucky_number: 13,
    birthday: {
        month: 4,
        day: 14,
        year: 2982
    }
});
// Retrieve all students from VA
db.student.find({
    "home_state": 'VA'
}).pretty();
// All students whose lucky number is: greater than 3
db.student.find({
    "lucky_number": {
        $gt: 3
    }
}).pretty();
// All students whose lucky number is: less than or equal to 10
db.student.find({
    "lucky_number": {
        $lte: 10
    }
}).pretty();
// All students whose lucky number is: between 1 and 9 (inclusive)
db.student.find({
    "lucky_number": {
        $gte: 1,
        $lte: 9
    }
}).pretty();
// Add interests to each student
db.student.update({}, {
    $set: {
        "interests": ['coding', 'brunch', 'MongoDB']
    }
}, false, true);
// add unique interest for each particular student
db.student.find()
db.student.update({
    "_id": ObjectId("58ebad9f489f89e30b7899de")
}, {
    $addToSet: {
        "interests": 'fun in the sun'
    }
});
db.student.update({
    "_id": ObjectId("58ebadd2489f89e30b7899df")
}, {
    $addToSet: {
        "interests": 'running'
    }
});
db.student.update({
    "_id": ObjectId("58ebadd5489f89e30b7899e0")
}, {
    $addToSet: {
        "interests": 'eating'
    }
});
db.student.update({
    "_id": ObjectId("58ebadd8489f89e30b7899e1")
}, {
    $addToSet: {
        "interests": 'jumping'
    }
});
db.student.update({
    "_id": ObjectId("58ebadf9489f89e30b7899e2")
}, {
    $addToSet: {
        "interests": 'falling'
    }
});
//Add the interest 'taxes' into someone's interest array
db.student.update({
    "_id": ObjectId("58ebadd5489f89e30b7899e0")
}, {
    $addToSet: {
        "interests": 'taxes'
    }
});
//Remove the 'taxes' interest you just added.
db.student.update({
    "_id": ObjectId("58ebadd5489f89e30b7899e0")
}, {
    $pull: {
        "interests": 'taxes'
    }
});
//Remove all students who are from Florida
db.student.deleteMany({
    "home_state": 'FL'
});
//Remove a user by name.
db.student.deleteOne({
    "name": 'Rae'
});
//Remove a student whose lucky number is greater than 5
db.student.deleteOne({
    "lucky_number": {
        $gt: 5
    }
});
//Add a field to each student collection called 'number_of_belts' and set it to 0.
db.student.update({}, {
    $set: {
        "numer_of_belts": 0
    }
}, false, true);
//Increment this field by 1 for all students in Maryland
db.student.find({
    "home_state": "MD"
});
db.student.update({
    "_id": ObjectId("58ebadf9489f89e30b7899e2")
}, {
    $set: {
        "numer_of_belts": 1
    }
});
//Rename the 'number_of_belts' field to 'belts_earned'
db.student.update({}, {
    $rename: {
        "numer_of_belts": "belts_earned"
    }
}, false, true);
//Remove the 'lucky_number' field.
db.student.update({}, {
    $unset: {
        "lucky_number": ""
    }
}, false, true);
//Add a 'updated_on' field, and set the value as the current date.
db.student.update({}, {
    $currentDate: {
        "updated_on": {
            $type: "date"
        }
    }
}, false, true);
