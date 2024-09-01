this.dir <- dirname(parent.frame(2)$ofile)
setwd(this.dir)

diab <- read.csv(file = "iris.csv", header = FALSE)
diab2 <- read.table(file = "iris.tsv", header = FALSE)

View(diab)
View(diab2)

save(diab, file = "iris.RData")