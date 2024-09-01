## Control Flow

# Loops

# while
i <- 1
while (i < 5) {
    print(i)
    i <- i + 1
}

# for
for (i in 1:5) {
    print(paste("the number is ", i))
}

# nested for
mtx <- matrix(ncol = 10, nrow = 10)
for (r in 1:dim(mtx)[1]) {
    for (c in 1:dim(mtx)[2]) {
        mtx[r, c] <- r * c
    }
}
View(mtx[1:5, 1:5])

# If Statements

aa <- 12
ab <- NA
ac <- if (aa < 10) {
    ab <- "short"
} else {
    ab <- "long"
}
print(ab)