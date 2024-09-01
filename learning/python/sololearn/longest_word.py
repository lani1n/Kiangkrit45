"""
Longest Word

Given a text as input, find and output the longest word.

Sample Input
this is an awesome text

Sample Output
awesome
Recall the split(' ') method, which returns a list of words of the string.
"""

def main():
    txt = input()
    longest_str = max(txt.split(), key=len)
    return longest_str
print(main())