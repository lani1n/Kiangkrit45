#include <iostream>

using namespace std;

int main()
{
    const int MINUTES_PER_HOUR = 60;

    int numHours = 3;

    // MINUTES_PER_HOUR++;
    numHours++;

    int minutes = numHours * MINUTES_PER_HOUR;

    cout << "There are " << minutes << " minutes in " << numHours << " hours." << endl;

    unsigned int zeroHour = 0;
    zeroHour--;

    cout << "1 hour before zero hour is " << zeroHour << endl;
    return 0;
}
