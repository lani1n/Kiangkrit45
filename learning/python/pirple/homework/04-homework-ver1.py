"""
this code works but not following the instruction
so i leave it here
"""
myUniqueList = []

number = [1, 2, 2, 3, 3, 3, 4, 4, 5, 5]

def uniqueness(number):
    for x in number:
        if x in myUniqueList:
            continue
        else:
            myUniqueList.append(x)
    return myUniqueList

print(myUniqueList) # before

uniqueness(number)

print(myUniqueList) # after