#include <iostream>

using namespace std;

int main()
{
    char myChar = 'A';
    bool myBool = true;
    bool myOtherBool = false;

    int myConvertedChar = (int)myChar;
    int myConvertedBool = (int)myBool;
    int myConvertedOtherBool = (int)myOtherBool;

    cout << myConvertedChar << endl;
    cout << myConvertedBool << endl;
    cout << myConvertedOtherBool << endl;
    return 0;
}
