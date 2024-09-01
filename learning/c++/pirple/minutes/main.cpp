#include <iostream>
#include <climits>

using namespace std;

int main()
{
    // Variable and Constants
    const int SECONDS_PER_MINUTE = 60;

    // Integers
    int minutes = 5;
    int seconds;

    seconds = minutes * SECONDS_PER_MINUTE;

    cout << "There are " << seconds << " sec in " << minutes << " min." << endl;

    // Booleans
    int planetCount = 8;

    bool extraPlanet = true;

    // all values rather than 0 evaluated to true
    extraPlanet = 1;

    if (extraPlanet) {
        planetCount++;
    }

    if (planetCount < 10) {
        planetCount--;
    }

    cout << "Greetings, all " << planetCount << " Planets." << endl;
}
