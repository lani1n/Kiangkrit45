#include <iostream>
#include <bitset>
#include <string>

using namespace std;

void display(string message, int value)
{
    bitset<8> myBitset(value);
    cout << message;
    cout << myBitset.to_string() << " (" << myBitset.to_ulong() << ")" << endl;
}

int main()
{
    int myNumber = 15;
    int valueA = 12;
    int valueB = 139;

    display("starting value:    ", myNumber);

    myNumber = myNumber << 1;
    display("shifted left 1:    ", myNumber);

    myNumber = myNumber >> 2;
    display("shifted right 1:   ", myNumber);

    display("bitwise NOT:       ", ~myNumber);

    display("First number:      ", valueA);
    display("Second number:     ", valueB);
    display("Or result:         ", valueA | valueB);

    return 0;
}
