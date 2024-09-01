# Lecture: Guessing Game

from random import randint

random_value = randint(0, 100)
while (True):
    guess = int(input("Please enter your guess: "))
    if guess == random_value:
        break
    elif guess < random_value:
        print("Your guess was too low.")
    else:
        print("Your guess was too high.")
print(f"You guessed correctly with {guess}")