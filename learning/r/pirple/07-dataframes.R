## Data Frames
# Introduction to Data Frames

# uncaught error
# this code is not usable

this.dir <- dirname(parent.frame(2)$ofile)
setwd(this.dir)

a <- 1:25
b <- 100:124
c <- rep("abc", 25)
df <- data.frame(col1 = a, col2 = b, col3 = c)
View(df)

data("iris")
iris[, 2:4]

iris$ID <- 1:nrow(iris)
library(reshape2)
ds <- melt(iris, id.vars = c("ID", "Species"))

View(ds)
dim(ds)