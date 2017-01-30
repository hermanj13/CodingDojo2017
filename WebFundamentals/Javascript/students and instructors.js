var students = [
     {firstName:  "Michael", lastName : "Jordan"},
     {firstName : "John", lastName : "Rosales"},
     {firstName : "Mark", lastName : "Guillen"},
     {firstName : "KB", lastName : "Tonel"}
];

for (var i = 0; i < students.length; i++) {
  console.log(i+1 + " - " + students[i].firstName + " " + students[i].lastName);
}
