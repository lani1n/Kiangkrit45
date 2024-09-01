# Lecture: Introduction to Loops

"""example 1"""

Word = "Hello"

for w in Word:
    print(w)
    if w == "e":
        print("That was a funny letter")
        # H
        # e
        # That was a funny letter
        # l
        # l
        # o

"""example 2"""

Word = "Hello"

Letters = []

for w in Word:
    print(w)
    if w == "e":
        print("That was a funny letter")
    """
    basically all the letter supposed to be printed out 
    are added to Letters - empty list
    """
    Letters.append(w)
print(Letters)
# ['H', 'e', 'l', 'l', 'o']

for l in Letters:
    print(l)
    # H
    # e
    # l
    # l
    # o

"""example 3"""

Numbers = [1, 2, 3, 4, 5]

for l in Numbers:
    if l%2 == 1:
        """
        if a remainder is equal to 0:
            1 % 2 = 1
            2 % 2 = 0
            3 % 2 = 1
            4 % 2 = 0
            5 % 2 = 1
        """
        print(l)
        # 1
        # 3
        # 5

"""example 4"""

Numbers = []

for num in range(5):
    # num = 0 / num < 5
    Numbers.append(num)
    print(num)
    # 0
    # 1
    # 2
    # 3
    # 4

print(Numbers)
# [0, 1, 2, 3, 4]

"""example 5"""

Numbers = []

# from 1 to 11 with increment value 2
for num in range(1, 12, 2):
    Numbers.append(num)
print(Numbers)
# [1, 3, 5, 7, 9, 11]

"""example 6"""

Numbers = []

# from -1 to -13 with increment value 3
for num in range(-1, -14, -3):
    Numbers.append(num)
print(Numbers)
# [-1, -4, -7, -10, -13]

# Lecture: While Loops

"""
    while (condition):
        action1
        action2
        action3
"""

"""example 1"""

counter = 1
Sum = 0
while (counter <= 5):
    print(counter)
    Sum = Sum + counter
    counter = counter + 1
    # 1
    # 2
    # 3
    # 4
    # 5

print(Sum)
# 1 + 2 + 3 + 4 + 5
# 15

"""example 2"""

KeepTrack = 1

Sum = 0
while (KeepTrack <= 5):
    print(KeepTrack)
    # 1
    # 2
    # 3
    # 4
    # 5
    Sum = Sum + KeepTrack
    KeepTrack = KeepTrack + 1
print(Sum)
# 15

"""example 3"""

Letters = ["a", "b", "c"]

Index = 0

while (Index < len(Letters)):
    print(Index)
    print(Letters[Index])
    Index = Index + 1
    # 0
    # a
    # 1
    # b
    # 2
    # c

"""example 4"""

height = 5000
velocity = 50
time = 0

while (height > 0):
    height = height - velocity
    time = time + 1

print(height)
# 0

print(time)
# 100

# Lecture: "Breaking" and "Continuing" in Loops

"""example 1"""

Participants = ["Jane", "Alex", "Tina", "Joe", "Ben"]

position = 0
for name in Participants:
    if name == "Tina":
        print("About to break")
        break
    position = position + 1
    print("About to increment")
    # About to increment
        # Jane
    # About to increment
        # Alex
    # About to break
        # Tina
    # 2
        # Jane and Alex
print(position)

"""example 2"""

Participants = ["Jane", "Alex", "Tina", "Joe", "Ben"]

# len(Participants) = 5
for currentIndex in range(len(Participants)):
    print(currentIndex)
    if Participants[currentIndex] == "Joe":
        print("Breaking!")
        break
    print("Not Break")
print(currentIndex)

"""example 3"""

for number in range(10):
    if number % 3 == 0:
        print(number)
        print("Divisible by 3")
        continue
    print(number)
    print("Not divisible")