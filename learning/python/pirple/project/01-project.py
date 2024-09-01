from termcolor import colored, cprint

fields = [
    [" ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " "]]

def draw_board(fields):
    for row in range(13):
        if row % 2 == 0:
            practical_row = int(row/2)
            for column in range(13):
                if column % 2 == 0:
                    practical_column = int(column/2)
                    color = "white"
                    if fields[practical_column][practical_row] == "X":
                        color = "red"
                    title = colored(fields[practical_column][practical_row], color, attrs=["bold"])
                    print(title, end = "") if column != 12 else print(title)
                else:
                    print("|", end = "")
        else:
            print("-------------")
    print("\n")

def update_board(num, player):
    column = fields[num]
    index = ""
    reversed_column = column[::-1]
    for row in reversed_column:
        if row == " ":
            index = reversed_column.index(row)
            reversed_column[index] = "X" if player == 1 else "O"
            break
    if index == "":
        return False
    column = reversed_column[::-1]
    fields[num] = column
    draw_board(fields)
    return True

def four_in_row():
    winner = False
    for column in fields:
        counter = 0
        length = len(column)
        for i in range(1, length):
            if column[i - 1] != " " and column[i] != " " and column[i - 1] == column[i]:
                counter += 1
            else:
                counter = 0
            if counter == 3:
                winner = column[i - 1]
                return winner
    return winner

def four_in_column(column_matrix):
    winner = False
    for column in column_matrix:
        counter = 0
        length = len(column)
        for i in range(1, length):
            if column[i - 1] != " " and column[i] != " " and column[i -1 ] == column[i]:
                 counter += 1
            else:
                counter = 0
            if counter == 3:
                winner = column[i - 1]
                return winner
    return winner

def four_in_diagonala(column_matrix, player):
    for i in range(0, len(column_matrix)):
        for j in range(0, len(column_matrix[i])):
            try:
                if column_matrix[i][j] == player and column_matrix[i + 1][j - 1] == player and column_matrix[i + 2][j - 2] == player and column_matrix[i + 3][j - 3] == player:
                    return True
            except IndexError:
                next
    return False

def four_in_diagonalb(column_matrix, player):
    for i in range(0, len(column_matrix)):
        for j in range(0, len(column_matrix[i])):
            try:
                if column_matrix[i][j] == player and column_matrix[i + 1][j + 1] == player and column_matrix[i + 2][j + 2] == player and column_matrix[i + 3][j + 3] == player:
                    return True
            except IndexError:
                next
    return False

def valid_move(column_no):
    if column_no >=1 and column_no <=7:
        return True
    else:
        return False

def create_colmatrix():
    column_matrix = [
        [" ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " "]]
    for i in range(7):
        for j in range(len(fields[i])):
            column_matrix[j][i] = fields[i][j]
    return column_matrix

def connect4():
    player = 1
    no_win = True
    winner = ""
    while(no_win):
        ask_column = colored("Player " + str(player) + " turn, enter the column number:\n", "yellow",attrs=["bold"])
        column_no = input(ask_column)
        if column_no:
            column_no = int(column_no)
            if valid_move(column_no) == False:
                cprint("Hey, this is not a right move. Try again.\n", "red", attrs=["bold"])
            else:
                updated_flag = update_board(column_no - 1, player)
                if updated_flag:
                    print("")
                    current_player = player
                    tile = "X" if player == 1 else "O"
                    player = 2 if player == 1 else 1
                    winner = four_in_row()
                    if winner:
                        no_win = False
                    else:
                        column_matrix = create_colmatrix()
                        winner = four_in_column(column_matrix)
                        if winner:
                            no_win = False
                        elif four_in_diagonalb(column_matrix, tile):
                            winner = current_player
                            no_win = False
                        elif four_in_diagonala(column_matrix, tile):
                            winner = current_player
                            no_win = False
                else:
                    cprint("Hey, this is not a right move. Try again.\n", "red", attrs=["bold"])
        else:
            cprint("Hey, this is not a right move. Try again.\n", "red", attrs=["bold"])
    winner = "1" if winner == "X" else "2"
    cprint("THE WINNER IS PLAYER "+ str(winner), "blue", attrs=["bold"])
print("Starting Connect 4 Game... Get ready!\n")
draw_board(fields)
connect4()