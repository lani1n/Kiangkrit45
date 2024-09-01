"""version 1"""

i = 0

while (i < 100):
    i += 1
    if i % 15 == 0:
        print("FizzBuzz")
    elif i % 5 == 0:
        print("Buzz")
    elif i % 3 == 0:
        print("Fizz")
    # extra credit
    elif ((i % 2 != 0 and i % 7 != 0 and i != 1) or i == 2 or i == 7):
        print("Prime")
    else: print(i)