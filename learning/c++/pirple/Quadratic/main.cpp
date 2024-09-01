#include <iostream>
#include <math.h>

using namespace std;

int main()
{
    float a, b, c, x1, x2;

    cout << "Enter the value of a " << endl;
    cin >> a;

    cout << "Enter the value of b " << endl;
    cin >> b;

    cout << "Enter the value of c " << endl;
    cin >> c;

    x1 = (-b + sqrt(pow(b,2) - 4*a*c)) / (2*a);
    x2 = (-b - sqrt(pow(b,2) - 4*a*c)) / (2*a);

    cout << "This quadratic has the following roots: x = " << x1 << endl;
    cout << "x = " << x2 << endl;
    return 0;
}
