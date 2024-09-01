number = 1
for number in range(100):
    number = number + 1
    if number % 15 == 0:
        print("FizzBuzz")
        continue
    elif number % 5 == 0:
        print("Buzz")
        continue
    elif number % 3 == 0:
        print("Fizz")
        continue
    elif ((number % 2 != 0 and number % 7 != 0 and number != 1)
    or number == 2 or number == 7):
        print("Prime")
        continue
    print(number)