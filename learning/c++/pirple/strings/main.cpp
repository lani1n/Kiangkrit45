#include <iostream>
#include <string>

using namespace std;

string trim(string anyString)
{
    string returnVal = anyString;
    int lastPosition = returnVal.length() - 1;
    bool found = true;
    while (found == true && lastPosition >= 0)
    {
        if (returnVal.substr(lastPosition, 1) == " ")
        {
            returnVal = returnVal.erase(lastPosition, 1);
        }
        else if (returnVal.substr(0, 1) == " ")
        {
            returnVal = returnVal.erase(0, 1);
        }
        else
        {
            found = false;
        }
        lastPosition = returnVal.length() - 1;
    }
    return returnVal;
}

int main()
{
    // two ways to declare a string
    string myString = "ABC";
    string myString2("DEF");

    string myString3 = " ";
    string myString4 = "Hello World   ";

    cout << trim(myString4) << ".\n";
    cout << myString << ".\n";
    cout << myString2 << ".\n";
    return 0;
}
