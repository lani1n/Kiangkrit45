#include <iostream>
#include <math.h>
#include <bitset>
#include <string>

using namespace std;

int bitsToInt(char bitList[], int bitCount, bool twoComplement)
{
    int result = 0;
    int placeValue = pow(2, bitCount - 1);
    char bit = '0';

    for (int bitNum = 0; bitNum < bitCount; bitNum++)
    {
        bit = bitList[bitNum];
        result += (bit == '1') ? placeValue : 0;
        placeValue *= 0.5;
    }

    if (twoComplement == true && bitList[0] == '1')
    {
        placeValue = pow(2, bitCount);
        result -= placeValue;
    }

    return result;
}

void showBits(int value, int bitCount)
{
    int placeValue = pow(2, bitCount - 1);
    for (int bitNum = 0; bitNum < bitCount; bitNum++)
    {
        char bit = '0';
        if (value >= placeValue)
        {
            bit = '1';
            value -= placeValue;
        }
        cout << bit;
        placeValue *= 0.5;
    }
}

int main()
{
    char myBitList[] = "11111111";
    int result = bitsToInt(myBitList, 8, false);

    cout << "The result is " << result << endl;

    int myValue = 15;
    cout << myValue << " in binary is ";
    showBits(15, 8);
    cout << endl;

    bitset<8> myBitSet (std::string("01111111"));
    cout << "The binary number " << myBitSet.to_string() << " has a decimal value of " << myBitSet.to_ulong() << endl;

    return 0;
}
