"""base x to base 10 converter"""

# def main():
#     x = input("What is your number: ")
#     base_x = int(input("The base of your number is: "))
#     return int(x, base_x)
# print(main())

"""Factorial program"""

# take input

# def Factorial():
#     num = int(input())
#     result = 1
#     if num == 0 or num == 1:
#         return result
#     else:
#         for i in range(num, num >= 1, -1):
#             result = result * i
#         return result
# print(Factorial())

# no input

# def Factorial(num):
#     result = 1
#     if num == 0 or num == 1:
#         return result
#     else:
#         for i in range(num, num >= 1, -1):
#             result = result * i
#         return result
# print(Factorial(5))

# recursion

# def Factorial(num):
#     if (num == 0 or num == 1):
#         return 1
#     else:
#         return num * Factorial(num - 1)
# print(Factorial(5))

"""vowels counter"""

# def main():
#     str = input()
#     vowels = ["a", "e", "i", "o", "u"]
#     vowels_count = 0
#     for i in str:
#         if i in vowels:
#             vowels_count += 1
#     return vowels_count
# print(main())

"""Get longest string from text"""

# def main():
#     txt = input()
#     longest_str = max(txt.split(), key=len)
#     return longest_str
# print(main())