"""
    reference 1
    https://github.com/mxquel/py_is_easy_assignments/blob/master/pirple_advancedLoops.py
"""

# markers
s = '|'
f = '––'
e = '  '
p = ' '

def setup_board(matrix=3):
    # determine necessary character spaces for a specific matrix
    places = matrix + (matrix - 1)

    row = ''.join([(e if c % 2 == 0 else s) for c in range(places)])
    devider = ''.join([(f if c % 2 == 0 else p) for c in range(places)])
    fields = [(row if place % 2 == 0 else devider) for place in range(places)]

    return places, fields

def print_board(board):
    places, fields = board
    
    print('\n'.join(fields))
    
    return True

print_board(setup_board())

"""
    reference 2
    https://github.com/shradha001/python_is_easy/blob/master/homework_6/main.py
"""
MAXIMUM_ROWS_ALLOWED = 49
MAXIMUM_COLUMNS_ALLOWED = 204

def createPlayingBoard(rows, columns):
    if type(rows) != int or type(columns) != int:
        return False
   
    if rows <= 1 or columns <= 1:
        return False

    if rows > MAXIMUM_ROWS_ALLOWED or columns > MAXIMUM_COLUMNS_ALLOWED:
        return False

    #rows loop
    for row in range(0, rows):
        # if the rows are even, print '|'
        if row % 2 == 0:
            for column in range(0, columns):
                # if the column is even, print spaces
                if column % 2 == 0:
                    endChar = ""
                    
                    if column == columns - 1:
                        endChar = "\n"
                    print(" ", end = endChar)
                # if the columns are odd, print '|'
                else:
                    print("|", end="")

        # if the rows are odd, print '-'
        else:
            for column in range(0, columns):
                endChar = ""
                # if it is the last element, end with a new line
                if column == columns - 1:
                    endChar = "\n"
                print("-", end=endChar)
    print("")
    return True

def playingBoardCreated(rows, columns):
    if(createPlayingBoard(rows, columns)):
        print('Here is your playing board.')
    else:
        print('Err, No playing board for you.')

playingBoardCreated(5, 5)