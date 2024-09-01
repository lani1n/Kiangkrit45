#include <iostream>

using namespace std;

int main()
{
    /*
    example 1:

    int daysInJan = 31;
    int daysInFeb = 28;
    int daysInMar = 31;

    example 2:

    int daysInMonth[12];
    daysInMonth[0] = 31;
    daysInMonth[1] = 28;
    daysInMonth[2] = 31;
    daysInMonth[3] = 30;
    daysInMonth[4] = 31;
    daysInMonth[5] = 31;
    daysInMonth[6] = 30;
    daysInMonth[7] = 31;
    daysInMonth[8] = 30;
    daysInMonth[9] = 31;
    daysInMonth[10] = 30;
    daysInMonth[11] = 31;
    */
    int daysInMonth[12] = {31, 28, 31, 30, 31, 31, 30, 31, 30, 31, 30, 31};
    float catalogPrice[100] = {33.33};
    bool isSalesToday[365] = {true, false, };

    int currentMonth = 7;
    int daysThisMonth = daysInMonth[currentMonth];

    // Array Iteration
    for (int i = 0; i < 12; i++)
    {
        cout << "There are " << daysInMonth[i] << " days in this month" << endl;
    }
    return 0;
}
