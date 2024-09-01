# Lecture: Lists

"""example 1"""

TestList = ["element1", "element2", "element3"]

print(TestList)
# brackets
# index 0 first
print(TestList[2]) # last item

"""example 2"""

Scores = [70, 85, 67.5, 90, 80]

print(Scores[1:3]) # index 1 to index 2

Scores[-3] = 72.5 # change value
print(Scores[-3]) # 3 from the last / this case index 2

Scores[4] = "this is 80" # can change type
print(Scores[-1]) # 1 from the last / last item

Scores[2] = ["Hello", "World"] # change index 2 to list
print(Scores)

print(Scores[2][0]) # access list inside list return "Hello"

Scores.append(82.5) # add 82.5 to the list at the end
print(Scores)