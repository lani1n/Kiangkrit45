# Lecture: Making Shapes with Loops

"""example 1"""

Length = 5

for pos in range(1, Length+1):
    print("c"*pos)
    # c
    # cc
    # ccc
    # cccc
    # ccccc

"""example 2"""

Length = 6
ToPrint = "a"

for pos in range(1, Length+1):
    print(ToPrint*pos)
    # a
    # aa
    # aaa
    # aaaa
    # aaaaa
    # aaaaaa
for pos in range(Length-1, 0, -1):
    print(ToPrint*pos)
    # aaaaa
    # aaaa
    # aaa
    # aa
    # a

# Lecture: Nested Loops

for row in range(5): # 0, 1, 2, 3, 4
    if row % 2 == 0: # 0, 2, 4
        for column in range (1, 6): # 1, 2, 3, 4, 5
            if column % 2 == 1:
                if column != 5:
                    print(" ", end = "") # 1, 3
                else:
                    print(" ") # 5
            else:
                print("|", end = "") # 2
    else: # 1, 3
        print("-----")