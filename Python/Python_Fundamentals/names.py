users = {
 'Students': [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
  ],
 'Instructors': [
     {'first_name' : 'Michael', 'last_name' : 'Choi'},
     {'first_name' : 'Martin', 'last_name' : 'Puryear'}
  ]
 }

for key, listt in users.iteritems():
    counter = 1
    print key
    for elements in listt:
        x = 1
        str1 = elements['first_name'] + " " + elements['last_name']
        print counter, "-", str1, "-", len(str1) -1
        counter += 1
