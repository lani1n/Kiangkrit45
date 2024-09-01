#include <iostream>

using namespace std;

int main()
{
    int highest = 100;
    int lowest = 0;
    int attempts = 0;
    int guess;
    char userResponse;
    attempts++;

    cout << "Think of a number between 1 and 100" << endl;
    while (attempts > 0)
    {
        guess = lowest + ((highest - lowest) * 0.5);
        cout << "I guess " << guess << ". Am I right?" << endl;
        cout << "'q' to quit, 'y' if correct, 'h' if too high, 'l' if too low." << endl;
        cin >> userResponse;
        if (userResponse == 'h')
        {
            highest = guess;
            attempts++;
            continue;
        }
        else if (userResponse == 'l')
        {
            lowest = guess;
            attempts++;
            continue;
        }
        else if (userResponse == 'y')
        {
            cout << "I guessed it in " << attempts << " attempts." << endl;
            break;
        }
        else if (userResponse == 'q')
        {
            cout << "You quit. Bye" << endl;
            break;
        }
        else
        {
            cout << "I didn't understand that response." << endl;
            continue;
        }
    }
}
