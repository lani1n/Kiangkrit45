## Input and Output

# Data Input - Part A

# importing
setwd("C:/Users/Kiang/Shared VM/Documents/Programming/learn-R/pirple")
# csv
ds <- read.csv(file = "03-ref-1.csv")
# xlsx
# text (pipe/tab delimited)

# Data Input - Part B

# RData
load("03-ref-4.RData")
# sourcing R code

source("test.R") # 10

# Data Output

# csv
write.csv(ds, file = "03-ref-1.csv")
# text
write.table(ds, file = "03-ref-3.txt", sep = "\t")
# RData
save(ds, file = "03-ref-4.RData")

ds2 <- rbind(ds, ds)
print(dim(ds))

# R image
save.image(file = "03-ref-4.RData")