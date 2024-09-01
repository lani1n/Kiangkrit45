# Lecture: Tic-Tac-Toe

# 01234
#  | |  0
# ----- 1
#  | |  2
# ----- 3
#  | |  4

def drawField(field):
    for row in range(5): # 0, 1, 2, 3, 4
        if row % 2 == 0: # even number
            practicalRow = int(row/2)
            # print writing line
            for column in range(5):
                # 0,1,2,3,4
                # 0,.,1,.,2
                if column % 2 == 0:
                    practicalColumn = int(column/2) # 0,1,2
                    if column != 4:
                        print(field[practicalColumn][practicalRow], end = "")
                    else:
                        print(field[practicalColumn][practicalRow])
                else:
                    print("|", end = "")
        else:
            print("-----")
# drawField()

Player = 1
currentField = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]]
drawField(currentField)
while(True): # True == True
    print("Player turn:", Player)
    MoveRow = int(input("Please enter the row: "))
    MoveColumn = int(input("Please enter the column: "))
    if Player == 1:
        # make move for player 1
        if currentField[MoveColumn][MoveRow] == " ":
            currentField[MoveColumn][MoveRow] = "X"
            Player = 2
    else:
        # make move for player 2
        if currentField[MoveColumn][MoveRow] == " ":
            currentField[MoveColumn][MoveRow] = "O"
            Player = 1
    drawField(currentField)