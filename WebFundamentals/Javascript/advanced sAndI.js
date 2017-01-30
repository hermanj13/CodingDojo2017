var users = {
 'Students': [
     {firstName:  'Michael', lastName : 'Jordan'},
     {firstName : 'John', lastName : 'Rosales'},
     {firstName : 'Mark', lastName : 'Guillen'},
     {firstName : 'KB', lastName : 'Tonel'}
  ],
 'Instructors': [
     {firstName : 'Michael', lastName : 'Choi'},
     {firstName : 'Martin', lastName : 'Puryear'}
  ]
};


console.log("Students");
for (var i = 0; i < users.Students.length; i++) {
  var length = users.Students[i].firstName.length + users.Students[i].lastName.length;
   console.log(i+1 + " - " + users.Students[i].firstName + " " + users.Students[i].lastName + " - " + length);
}
console.log("Instructors");
for (i = 0; i < users.Instructors.length; i++) {
  length = users.Instructors[i].firstName.length + users.Instructors[i].lastName.length;
   console.log(i+1 + " - " + users.Instructors[i].firstName + " " + users.Instructors[i].lastName + " - " + length);
}
