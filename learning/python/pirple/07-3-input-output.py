# Lecture: Participant Data
# Part A and B

participantNumber = 5
participantData = []
registeredParticipants = 0
outputFile = open("ParticipantData.txt", "w")

while(registeredParticipants < participantNumber):
    tempPartData = [] # name, country, age
    name = input("Please enter your name: ")
    tempPartData.append(name)
    country = input("Please enter your country of origin: ")
    tempPartData.append(country)
    age = input("Please enter your age: ")
    
    tempPartData.append(age)
    print(tempPartData)

    participantData.append(tempPartData)
    print(participantData)

    registeredParticipants += 1

for participant in registeredParticipants:
    for data in participant:
        outputFile.write(str(data))
        outputFile.write(" ")

outputFile.close()

inputFile = open("ParticipantData.txt", "r")
inputList = []

for line in inputFile:
    tempParticipant = line.strip("\n").split()
    print(tempParticipant)

    inputList.append(tempParticipant)
    print(inputList)