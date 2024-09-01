#include <iostream>
#include <iomanip>

using namespace std;

float processLineItem (int qty, const char *description, float price)
// float process (int qty, const char *description, float price)
// process is bad name - not much details
{
    float lineTotal = price * qty;
    cout << setw(10) << qty
            << setw(20) << description
            << setw(6) << setprecision(2) << price
            << setw(6) << setprecision(2) << lineTotal << endl;

    return lineTotal;
}

int main()
{
    float runningTotal = 0;
    cout << setw(10) << "Quantity"
            << setw(20) << "Description"
            << setw(6) << "Price"
            << setw(6) << "Total" << endl;
    runningTotal += processLineItem(3, "Apples", .45F);
    runningTotal += processLineItem(2, "Oranges", .45F);
    runningTotal += processLineItem(1, "Lobster", 21.99F);

    cout << endl;
    cout << "The grocery bill totals $" << runningTotal << endl;
    return 0;
}
