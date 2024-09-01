# Grade Analysis

# You have a dataframe that includes grades of students.
# Your program needs to take a number as input,
# and output the number of students greater than the given input.
# For example, for the input 89, the output should be:
# [1] 3
# as 3 students have grades greater than 89.
# Hint: Use the length() function to find the number of items in a vector.

input <- readLines("stdin")
x <- as.integer(input[1])

data <- data.frame(
    "id" = c(1:10),
    "grade" = c(75, 26, 54, 90, 86, 93, 48, 71, 66, 99)
)

criteria = data[data > x]
print(length(criteria))