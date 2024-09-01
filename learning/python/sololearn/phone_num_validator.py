"""
Phone Number Validator

You are given a number input, and need to check if it is a valid phone number.
A valid phone number has exactly 8 digits and starts with 1, 8 or 9.
Output "Valid" if the number is valid and "Invalid", if it is not.

You can use a regular expression to check if the input matches the given pattern.

Sample Input
81239870

Sample Output
Valid

Test Case 1:

Input
81234567

Expected Output
Valid

Test Case 2:

Input
57345672

Expected Output
Invalid
"""

import re

phone_num = input()
rule = r"^[189]"

def main():
    if re.match(rule, phone_num) and len(phone_num) < 9:
        print("Valid")
    else:
        print("Invalid")
main()