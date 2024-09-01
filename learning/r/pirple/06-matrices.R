## Matrices
# Introduction to Matrices

a <- 1:25
m <- matrix(a, ncol = 5, nrow = 5, byrow = T)
m2 <- matrix(a, ncol = 5, nrow = 5, byrow = T)
m2[3, c(1, 3, 5)]

print(m)
print(dim(m2))