MAX_ROW = 45
MAX_COLUMN = 175

def playingBoard(rows, columns):
    if type(rows) != int or type(columns) != int:
        return False

    if rows <= 1 or columns <= 1:
        return False

    if rows > MAX_ROW or columns > MAX_COLUMN:
        return False

    for row in range(0, rows):
        if row % 2 == 0:
            for column in range (0, columns):
                if column % 2 == 0:
                    lastChar = ""
                    if column == columns - 1:
                        lastChar = "\n"
                    print(" ", end = lastChar)
                else:
                    print("|", end = "")
        else:
            for column in range(0, columns):
                lastChar = ""
                if column == columns -1:
                    lastChar = "\n"
                print("-", end =lastChar)
    print("")
    return True

playingBoard(5, 5)
playingBoard(9, 35)
playingBoard(45, 175)