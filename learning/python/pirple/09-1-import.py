# Lecture: Introduction to Importing

import random

random_int = random.randint(0, 10)
print(random_int)

random_float = random.random()
print(random_float)

random_uniform = random.uniform(1, 10)
print(random_uniform)

# Lecture: Alternative Import Methods

"""
from random import r

random_int = r.randint(0, 10)
random_float = r.random()
random_uniform = r.uniform(1, 10)
"""

simple_list = [1, 3, 5, 7, 11]
pick_from_list = random.choice(simple_list)
print(pick_from_list)

# Lecture: The Time Library

import time

current_time = time.time()
current_time = time.ctime(current_time)
print(current_time)

# for i in range(1, 4):
#     print(i)
#     time.sleep(i)

# Lecture: The Math Library

import math

value = 3

squared_value = math.sqrt(value)
expo_value = math.exp(value)
sin_value = math.sin(value)
floor_value = math.floor(value)
ceiling_value = math.ceil(value)

print(squared_value)
print(expo_value)
print(sin_value)
print(floor_value)
print(ceiling_value)