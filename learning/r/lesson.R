x <- 1 + 2
print(x)

for (y in 1:5) {
    print(y)
}

# Math
a <- 10.5 #numeric
b <- 10L #integer
c <- 1i #complex
print(a)
print(b)
print(c)

class(a)
class(b)
class(b)

# string
str1 <- "Hi!"
print(str1)

str2 <- "Hello
World
!"
print(str2)

#else if
aa <- 1
ab <- 2
if (ab > aa) {
    print("two is greater than one")
}

if (10 < 9) {
    print("ten is less than nine")
} else if (10 > 9) {
    print("ten is greater than nine")
}

ac <- 47 #nested if
if (ac > 23) {
    print("Fourty-seven is above twenty-three")
    if (ac > (23 * 2)) {
        print("and twenty-three is less than half of fourty-seven")
    } else {
        print("but twenty-three is greater than fourty-seven!")
    }
}