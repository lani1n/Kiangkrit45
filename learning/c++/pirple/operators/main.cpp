#include <iostream>

using namespace std;

int main()
{
    // example 1
    cout << "Example 1: " << endl;

    float myPrice = 200.0F;
    myPrice++;

    bool myResult = false;
    myResult = (myPrice >= 200.0F); // true
    myResult = !myResult; // false

    if (myResult == false)
    {
        cout << "My price is " << myPrice << endl;
    }

    // example 2
    cout << "Example 2: " << endl;

    int year = 2016;
    int month = 2;

    bool isLeapYear = (year % 4 == 0);
    bool has28Days = (!isLeapYear && month == 2);
    bool has29Days = (isLeapYear && month == 2);
    bool has30Days = (month == 11 || month == 4 || month == 6 || month == 9);
    bool has31Days = (!has28Days && !has29Days && !has30Days);

    cout << isLeapYear << endl;
    cout << has28Days << endl;
    cout << has29Days << endl;
    cout << has30Days << endl;
    cout << has31Days << endl;
    /*
    // Operators Overview
    myPrice = 200.0F + 55.5F;
    cout << "My price is " << myPrice << endl;

    myPrice = 200.0F - 55.5F;
    cout << "My price is " << myPrice << endl;

    myPrice = 200.0F * 55.5F;
    cout << "My price is " << myPrice << endl;

    myPrice += 55.5F;
    cout << "My price is " << myPrice << endl;
    */
    return 0;
}
