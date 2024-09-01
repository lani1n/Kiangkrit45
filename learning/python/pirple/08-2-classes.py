# Lecture: Pets
# Part A

class Pet:
    def __init__(self, name, age, hunger, playful):
        self.name = name
        self.age = age
        self.hunger = hunger
        self.playful = playful

    greeting = lambda self: self.name
    get_age = lambda self: self.age
    get_hunger = lambda self: self.hunger
    get_playful = lambda self: self.playful
    
    def set_name(self, xname):
        self.name = xname

    def set_age(self, xage):
        self.age = xage

    def set_hunger(self, xhunger):
        self.hunger = xhunger

    def set_playful(self, xplay):
        self.playful = xplay

Pet1 = Pet("Jim", 3, False, True)

# Part B
class Dog(Pet):
    def __init__(self, name, age, hunger, playful, breed, toy):
        Pet.__init__(self, name, age, hunger, playful)
        self.breed = breed
        self.toy = toy

    def want_to_play(self):
        if self.playful == True:
            return (f"Dog wants to play with {self.toy}")
        else:
            return ("Dog doesn't want to play")

husky = Dog("Snowball", 5, False, True, "Husky", "Stick")
print(husky.want_to_play())

# Part C
class Cat(Pet):
    def __init__(self, name, age, hunger, playful, place):
        Pet.__init__(self, name, age, hunger, playful)
        self.place = place

    def want_to_sit(self):
        if self.playful == False:
            print("The cat wants to sit in", self.place)
        else:
            print("The cat want to play")
    __str__ = lambda self: f"{self.name} likes to sit in {self.place}."

typical_cat = Cat("Fluffy", 3, False, False, "the sun ray")
typical_cat.want_to_sit()
print(typical_cat.__str__())

# Part D
class Human:
    def __init__(self, name, Pets):
        self.name = name
        self.Pets = Pets

    def has_pets(self):
        return "yes" if len(self.Pets) != 0 else "no"

average_human = Human("Alice", [typical_cat, husky])
print(average_human.has_pets())