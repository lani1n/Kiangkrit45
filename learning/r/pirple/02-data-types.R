## Data Types

# Introduction to Variables - Part A

a <- 3
b <- "test"
c <- c(5, 9, 3, 2, 9, 10)
d <- c(5, 9.1, 3, 2.4, 9, 10)
e <- c("t", "e", "st", "a", "b", "c")
f <- data.frame(col1 = c, col2 = e)

class(a) # numeric
class(b) # character

print(class(a))
print(class(b))
print(a)
print(b)
print(c)
print(d)
print(e)
print(f)

# Introduction to Variables - Part B

g <- list(a, b, c, d, e, f)
h <- F
i <- c + 20
j <- c > 5

print(g)
print(h) # False
print(a + 20) # 3 plus 20 equals to 23
print(i)
print(j) # (5, 9, 3, 2, 9, 10)
print(c[j]) # those true