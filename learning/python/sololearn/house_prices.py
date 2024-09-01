"""
House Prices

You are given an array that represents house prices.
Calculate and output the percentage of houses that are within one standard deviation from the mean.
To calculate the percentage, divide the number of houses that satisfy the condition by the total number of houses, and multiply the result by 100.
"""

import numpy as np
import math

data = np.array([
    150000, 125000, 320000, 540000, 200000,
    120000, 160000, 230000, 280000, 290000,
    300000, 500000, 420000, 100000, 150000, 280000])

lower = float((np.mean(data) - np.std(data)))
upper = float((np.mean(data) + np.std(data)))

my_list = np.array([i for i in data if i > lower and i < upper])

print(len(my_list) / len(data) * 100)