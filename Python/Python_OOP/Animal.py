class Animal(object):
    def __init__ (self, name, health = 100):
        self.name = name
        self.health = health
    def walk(self):
        self.health -= 1
        return self
    def run(self):
        self.health -= 5
        return self
    def displayHealth(self):
        print "My name is: " + self.name
        print "My health is:",self.health
        return self

class Dog(Animal):
    def __init__ (self,name, health = 150):
        self.name = name
        self.health = health
    def pet(self):
        self.health += 5
        return self

class Dragon(Animal):
    def __init__ (self, name, health = 170):
        self.name = name
        self.health = health
    def fly(self):
        self.health -= 10
        return self
    def displayHealth(self):
        print "This is a dragon!"
        super(Dragon, self).displayHealth()


animal1 = Animal("Fido")
animal1.walk().walk().walk().run().run().displayHealth()

dog1 = Dog("James")
dog1.walk().walk().walk().run().run().pet().displayHealth()

dragon1 = Dragon("Puff")
dragon1.walk().walk().walk().run().run().fly().displayHealth()
