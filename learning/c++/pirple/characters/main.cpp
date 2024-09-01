#include <iostream>

using namespace std;

int main()
{
    // Characters
    // Use single quotes ''
    char myCharacter = 'A';

    cout << "My character is " << myCharacter << endl;

    myCharacter++;

    cout << "My next character is " << myCharacter << endl;

    for (int num = 0; num < 20; num++) {
        myCharacter = (char)num;
        cout << "The character for " << num << " is " << myCharacter << endl;
    }

    return 0;
}
