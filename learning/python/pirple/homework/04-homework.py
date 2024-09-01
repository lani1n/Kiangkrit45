myUniqueList = []
myLeftovers = [] # extra credit

def uniqueness(x):
    if x in myUniqueList:
        print(False)
        myLeftovers.append(x)
    elif x not in myUniqueList:
        print(True)
        myUniqueList.append(x)

print(myUniqueList) # before
print(myLeftovers)

uniqueness(1)
uniqueness(1) # leftovers
uniqueness(2)
uniqueness(3)
uniqueness(3) # leftovers
uniqueness(4)
uniqueness(4) # leftovers
uniqueness(4) # leftovers
uniqueness(4) # leftovers
uniqueness(4) # leftovers
uniqueness(5)

print(myUniqueList) # after
print(myLeftovers)