# Lecture: If Statement

"""example1"""

click = True
like = 0

if click == True:
    like = like + 1
print(like)

temperature = 15
thermo = 15
print(thermo) # 15

"""example2"""

if temperature >= 15:
    thermo = thermo + 10
print(thermo) # 15 = 15 + 10 => 25

"""example3"""

time = "day"
sleepy = True
wearingPajamas = False

if time == "night" and sleepy == True: # both must be true
    wearingPajamas = True
print(wearingPajamas)

if time == "night" or sleepy == True: # either one of them
    wearingPajamas = True
print(wearingPajamas)

if time == "night":
    wearingPajamas = True
# else if statement in other programming langauges
elif time == "evening":
    wearingPajamas = True
else: wearingPajamas = False

print(wearingPajamas)