## Core Concepts in R
this.dir <- dirname(parent.frame(2)$ofile)
setwd(this.dir)

# Vectors

# character
a <- c("apple", "orage", "grapes", "melon", "banana")
print(a)

# numeric
b <- c(51, 43, 35, 27, 13)
print(b)
print(b * 2)

# vector based math
c <- c(3, 5, 7, 9, 11)
print(b + c)

# table uses vectors
d <- data.frame(fruit = a, amount = b, price = c)

# square brackets
# R index starts with 1 not 0
print(c[1:3])
print(b[4:5])

# Functions - Part A

# basic
num_doubler <- function(num) {
    num_doubled <- num * 2
    return(num_doubled)
}
print(num_doubler(12))
print(num_doubler(36))

num_adder <- function(num1, num2) {
   num_added <- num1 + num2
   return(num_added)
}
print(num_adder(7, 13))
print(num_adder(15, 32))

# Functions - Part B

siblings <- function(name1, name2) {
   str <- paste(name1, "and", name2, "are siblings")
   return(str)
}
print(siblings("James", "Jack"))
print(siblings("Lisa", "Jane"))

# Packages - Part A

# data manipulation
library(dplyr)

# visualization
library(ggplot2)

# working with dates
library(lubridate)

# Packages - Part B

# working with strings
library(stringr)

# reshaping the data
library(reshape2)

# web scraping
library(rvest)

# developing packages
library(devtools)

# database connection
library(RODBC)

# working with Excel
library(readxl)

# Case Study

library(ggplot2)
library(dplyr)
library(RColorBrewer)
library(geosphere)
options(scipen = F)
set.seed(1033)
ds2 <- read.csv("iris.csv")