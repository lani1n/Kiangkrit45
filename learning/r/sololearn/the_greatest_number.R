# The Greatest Number

# The given code takes 3 numbers as input.
# Complete the program to output the maximum of the 3 inputs.
# Use the print statement to output the result.

input <- readLines("stdin")
x <- as.integer(input[1])
y <- as.integer(input[2])
z <- as.integer(input[3])

result <- max(x, y, z)

print(result)