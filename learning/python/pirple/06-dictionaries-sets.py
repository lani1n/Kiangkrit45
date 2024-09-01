# Lecture: Dictionaries and Sets

"""example 1"""

# Sets = {
#     "Element1",
#     "Element2",
#     "Element3",
#     "Element4",
#     "Element5"
# }
# # unordered
# print(Sets)

# if "Element1" in Sets:
#     print("Yes")

# """example 2"""

# set

# CountryList = []
# for i in range(5):
#     Country = input("Please Enter Your Country: ")
#     CountryList.append(Country)

# CountrySet = set(CountryList)

# print(CountryList)
# print(CountrySet)

# if "Brazil" in CountrySet:
#     print("Attended")

"""example 3"""

CountryList = []
for i in range(5):
    Country = input("Please Enter Your Country: ")
    CountryList.append(Country)

CountryDictionary = {}

for Country in CountryList:
    if Country in CountryDictionary: # List[0]
        CountryDictionary[Country] += 1
    else:
        CountryDictionary[Country] = 1

print(CountryDictionary)
"""
For example,
    # Please Enter Your Country: US
    # Please Enter Your Country: US
    # Please Enter Your Country: US
    # Please Enter Your Country: UK
    # Please Enter Your Country: UK
    # {'US': 3, 'UK': 2}
"""

# Lecture: Examples of Dictionaries and Sets

blackShoes = {42:2, 41:3, 40:4, 39:1, 38:0}
print(blackShoes)

while(True): # True == True
    purchaseSize = int(input("Which shoe size would like to buy?\n"))
    if purchaseSize < 0:
        break
    if blackShoes[purchaseSize] > 0:
        # purchase item removes one
        blackShoes[purchaseSize] -= 1
    # out of stock
    else:
        print("Shoes are no longer in stock")
        break
    print(blackShoes)