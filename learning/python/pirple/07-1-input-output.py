# Lecture: Introduction to I/O

"""example 1"""
Name = input("Please Enter Your Name: ")
Age = input("Please Enter Your Age: ")

print("Your Name is " + Name)
print("Your Age is " + Age)

"""example 2"""
Scores = []

for i in range(5):
    # int("70") => 70
    currentScore = int(input("Please Enter the Score: "))
    # [] => [70] => [70, 75]
    Scores.append(currentScore)
    if currentScore == 69:
        print(currentScore, "is NOICE!")

# same result
print("The Scores are", Scores)
print("The Scores are " + str(Scores))

# Lecture: File I/O

VacationSpots = ["London", "Paris", "Utah", "Tokyo", "Taiwan"]
VacationFile = open("VacationPlaces", "w")

for Spots in VacationSpots:
    VacationFile.write(Spots + "\n")

VacationFile.close()
VacationFile = open("VacationPlaces", "r")

FirstLine = VacationFile.readline()
print(FirstLine)
SecondLine = VacationFile.readline()
print(SecondLine)

for line in VacationFile:
    print(line, end = "")

# TheWholeFile = VacationFile.read()
# print(TheWholeFile)

VacationFile.close()

FinalSpot = "Thailand\n"

VacationFile = open("VacationPlaces", "a")
VacationFile.write(FinalSpot)
VacationFile.close()

VacationFile = open("VacationPlaces", "r")
for line in VacationFile:
    print(line, end = "")

VacationFile.close()