# Lecture: Participant Data
# Part C

# participantNumber = 5
# participantData = []
# registeredParticipants = 0

# while(registeredParticipants < participantNumber):
#     tempPartData = [] # name, country, age
#     name = input("Please enter your name: ")
#     tempPartData.append(name)
#     country = input("Please enter your country of origin: ")
#     tempPartData.append(country)
#     age = input("Please enter your age: ")
    
#     tempPartData.append(age)
#     print(tempPartData)

#     participantData.append(tempPartData)
#     print(participantData)

#     registeredParticipants += 1

# for participant in registeredParticipants:
#     for data in participant:
#         outputFile.write(str(data))
#         outputFile.write(" ")

inputFile = open("ParticipantData.txt", "r")
inputList = []

for line in inputFile:
    tempParticipant = line.strip("\n").split()
    # print(tempParticipant)

    inputList.append(tempParticipant)
    # print(inputList)

Age = {}
print(inputList)

for part in inputList:
    tempAge = int(part[-1]) # int("21") -> 21
    if part[-1] in Age:
        Age[part[-1]] += 1
    else:
        Age[part[-1]] = 1
print(Age)

Countries = {}
for part in inputList:
    tempCountry = part[1]
    if tempCountry in Countries:
        Countries[tempCountry] += 1
    else:
        Countries[tempCountry] = 1
print("Countries that attended:", Countries)

Oldest = 0
Youngest = 100
MostOccuringAge = 0
counter = 0

for tempAge in Age:
    if tempAge > Oldest:
        Oldest = tempAge
    if tempAge < Youngest:
        Youngest = tempAge
    if Age[tempAge] > counter:
        counter = Age[tempAge]
        MostOccuringAge = tempAge
print(Oldest)
print(Youngest)
print("Most occuring age is:", MostOccuringAge, "with", counter, "participant")

inputFile.close()