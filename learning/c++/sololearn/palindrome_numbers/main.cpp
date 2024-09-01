/*
A palindromic number is a number (such as 626) that remains the same when its digits are reversed.
Write a function that returns true if a given number is a palindrome, and false, if it is not.
Complete the given function, so that the code in main works and results in the expected output.

Sample Input:
13431

Sample Output:
13431 is a palindrome
*/

#include <iostream>
using namespace std;

bool isPalindrome(int x) {
    int num, rem, rev = 0;
    num = x;
    while (x != 0) { 
        rem = x % 10; 
        rev= rev * 10 + rem;
        x /= 10;
    }
    if (rev==num) {
        return true;
    }
    else {
        return false;       
    }
}

int main() {
    int n;
    cin >> n;
    if (isPalindrome(n)) {
        cout << n << " is a palindrome";
    }
    else {
        cout << n << " is NOT a palindrome";
    }
    return 0;
}