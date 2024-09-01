#include <iostream>

using namespace std;

int main()
{
    int month = 0;
    int year = 0;

    cout << "Enter the year at 4 digits: " << endl;
    cin >> year;

    cout << "Enter the month as a number (1 - 12): " << endl;
    cin >> month;

    int daysInMonth = 0;
    int febDays = 0;

    // ternary operators
    // febDays = (year % 4 == 0) ? 29 : 28;

    /*
    if (year % 4 == 0)
    {
        febDays = 29;
    }
    else
    {
        febDays = 28;
    }
    */

    // switch statements
    switch (month)
    {
        case 2:
            daysInMonth = (year % 4 == 0) ? 29 : 28;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            daysInMonth = 30;
            break;
        default:
            daysInMonth = 31;
            break;
    }

    // if else statements
    /*
    if (month == 2)
    {
        daysInMonth = febDays;
    }
    else if (month == 6 || month == 9 || month == 11)
    {
        daysInMonth = 30;
    }
    else
    {
        daysInMonth = 31;
    }
    */

    cout << "There are " << daysInMonth << " days in this month." << endl;

    return 0;
}
