#include <iostream>

using namespace std;
char const PLAYER_X = 'X';
char const PLAYER_O = 'O';
char lastPlayer = PLAYER_O;
char currentPlayer = PLAYER_X;
char board[3][3] =
    {
        {'1', '2', '3'},
        {'4', '5', '6'},
        {'7', '8', '9'},
    };

void drawBoard()
{
    // y == row
    for (int y = 0; y < 3; y++)
    {
        // x == column
        for (int x = 0; x < 3; x++)
        {
            cout << board[y][x];
            if (board[y][x] == board[y][2])
            {
                cout << endl;
                if (board[y][x] == board[2][2])
                {
                    continue;
                }
                cout << "-+-+-\n";
                continue;
            }
            cout << "|";
        }
    }
}

int main()
{
    //
    char winningPlayer;
    char message;
    //
    int chosenSquare;
    for (int turn = 1; turn <= 5; turn++)
    {
        for (int eachTurn = 1; turn <= 2; eachTurn++)
        {
            cout << "current board state:\n";
            drawBoard();

            char playerPlayingNow;
            playerPlayingNow = (eachTurn % 2 == 0) ? 'O' : 'X';
            cout << "Player " << playerPlayingNow << ", enter a number between 1 and 9: ";

            cin >> chosenSquare;
            chosenSquare--;
            if (chosenSquare > 9)
            {
                cout << "Not a valid choice. Try Again\n";
            }
            board[0][chosenSquare] = (eachTurn % 2 == 0) ? lastPlayer : currentPlayer;

            // all 8 winning combinations
            // row win 3
            // 0 1 2
            // 3 4 5
            // 6 7 8
            if (board[0][0] == board[0][1] == board[0][2])
            {
                message = 'top row';
                cout << "Player " << winningPlayer << "wins on the " << message << endl;
                break;
            }
            if (board[0][3] == board[0][4] == board[0][5])
            {
                message = 'middle row';
                cout << "Player " << winningPlayer << "wins on the " << message << endl;
                break;
            }
            if (board[0][6] == board[0][7] == board[0][8])
            {
                message = 'bottom row';
                cout << "Player " << winningPlayer << "wins on the " << message << endl;
                break;
            }

            // diagonal win 2
            if (board[0][0] == board[0][4] == board[0][8])
            {
                message = 'downward diagonal';
                cout << "Player " << winningPlayer << "wins on the " << message << endl;
                break;
            }
            if (board[0][6] == board[0][4] == board[0][2])
            {
                message = 'upward diagonal';
                cout << "Player " << winningPlayer << "wins on the " << message << endl;
                break;
            }

            // column win 3
            if (board[0][0] == board[0][3] == board[0][6])
            {
                message = 'left column';
                cout << "Player " << winningPlayer << "wins on the " << message << endl;
                break;
            }
            if (board[0][1] == board[0][4] == board[0][7])
            {
                message = 'center column';
                cout << "Player " << winningPlayer << "wins on the " << message << endl;
                break;
            }
            if (board[0][2] == board[0][5] == board[0][8])
            {
                message = 'right column';
                cout << "Player " << winningPlayer << "wins on the " << message << endl;
                break;
            }
            //else
            //{
            //    cout << "Draw. Nobody Wins." << endl;
            //    break;
            //}
        }
    }
    return 0;
}
