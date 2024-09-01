#include <iostream>
#include <iomanip>

using namespace std;

int main()
{
    // declare price1, price2, price3 and total
    float price1;
    float price2;
    float price3;
    float total;

    cout << "Enter a price " << endl;
    cin >> price1;

    cout << "Enter a price " << endl;
    cin >> price2;

    cout << "Enter a price " << endl;
    cin >> price3;

    total = price1 + price2 + price3;

    cout << "Total price: " << fixed << setprecision(2) << total << endl;
    cout << "Price 1 is " << setw(11) << price1 << endl;
    cout << "Price 2 is " << setw(11) << price2 << endl;
    cout << "Price 3 is " << setw(11) << price3 << endl;

    return 0;
}
