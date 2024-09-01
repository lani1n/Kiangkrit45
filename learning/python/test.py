import numpy as np
import matplotlib.pyplot as plt
import pandas as pd

"""
case 1
"""
# def main1():
#     s1 = input()
#     s2 = int(input())
#     print("My", "name", "is", s1, "and", "I", "am", s2, "years", "old", end=".")
# main1()

# def main2():
#     s3 = input()
#     s4 = int(input())
#     print("My name is {} and I am {} years old.".format(s3, s4))
# main2()

"""
case 2
"""
# def function():
#     x = input()
#     print(x[1:10:2])
# function()

# def function2():
#     a = int(input())
#     b = int(a / pow(10, 8))
#     print(b)

# function2()

# def main():
#     a = "Hello World"
#     b = 5
#     print(a * b)
# main()

# def function():
#     a = int(input()) # 10
#     b = int(input()) # 4
#     c = "X" * b
#     d = "O" * (a - b)
#     print(c+d)
# function()

# def main():
#     a = "Hello"
#     b = "World"
#     print("a \nb")
# main()

"""
case 3
"""
# def function():
#     s1 = abs(int(input()))
#     s2 = abs(int(input()))
#     s3 = s1 + s2
#     s4 = "<3"
#     s5 = "_"
#     s6 = 10 - s3
#     print(f"My Heart {s3} Heart {s4 * s3}{s5 * s6}")
# function()

"""
case 4
"""
# line_counter = 1
# line = 2
# print(line_counter , " " , line)
# print(f"{line_counter}   {line}")

"""
case 5
"""
# import numpy as np
# import matplotlib.pyplot as plt

# x = np.array([0, 1, 0])
# y = np.array([0, 0, 1])
# plt.plot(x, y)
# plt.show()

"""
case 6
"""
# import numpy as np
# x1 = np.array([[3,2,5], [4,1,9], [2,4,2]])
# x2 = np.array([[1,2,4], [6,1,8], [0,4,9]])
# print(x1[:,1] - x2[:,1])

"""
case 7
"""
# Length = 5

# for pos in range(1, Length+1):
#     print("c"*pos)

"""
case 8
"""
# Length = 3
# ToPrint = "a"

# for pos in range(1, Length+1):
#     print(ToPrint*pos)
# for pos in range(Length-1, 0, -1):
#     print(ToPrint*pos)

"""
case 9
"""

# rows = 3
# k = 2 * rows - 2
# for i in range(0, rows):
#     for j in range(0, k):
#         print(end=" ")
#     k = k - 1
#     for j in range(0, i + 1):
#         print("* ", end="")
#     print("")
    
# k = rows - 2

# for i in range(rows, -1, -1):
#     for j in range(k, 0, -1):
#         print(end=" ")
#     k = k + 1
#     for j in range(0, i + 1):
#         print("* ", end="")
#     print("")

"""
case 9
"""

# def main():
#     user_input = input()
#     num1 = float(input())
#     num2 = float(input())
#     num3 = float(input())
#     min = float()
#     mid = float()
#     max = float()

#     min = num1
#     mid = num2
#     max = num3

#     if num1 == num2 == num3:
#         min = mid = max

#     if num1 < num2 and num1 < num3:
#         min = num1
#     if num2 < num1 and num2 < num3:
#         min = num2
#     if num3 < num1 and num3 < num2:
#         min = num3
    
#     if (num1 < num2 and num1 > num3):
#         mid = num1
#     if (num1 > num2 and num1 < num3):
#         mid = num1
#     if (num2 < num1 and num2 > num3):
#         mid = num2
#     if (num2 > num1 and num2 < num3):
#         mid = num2
#     if (num3 < num1 and num3 > num2):
#         mid = num3
#     if (num3 > num1 and num3 < num2):
#         mid = num3
    
#     print(max)

#     if max < min:
#         max = min
#     elif max <= mid:
#         max = mid
    

#     if num1 > num2 and num1 > num3:
#         max = num1
#     if num2 > num1 and num2 > num3:
#         max = num2
#     if num3 > num1 and num3 > num2:
#         max = num3
   
#     if mid == max:
#         max = mid
#     if mid == min:
#         min = mid

#     if user_input == 'Descend':
#         print("%.2f, %.2f, %.2f" % (max, mid, min))
#     elif user_input == 'Ascend':
#         print("%.2f, %.2f, %.2f" % (min, mid, max))
# main()

"""
case 10
"""

# def main():
#     user_input = input()
#     num1 = float(input())
#     num2 = float(input())
#     num3 = float(input())

#     # declare
#     minimum = num1
#     maximum = num2
#     medium = num3

#     if num2 <= minimum:
#         minimum = num2
#     if num3 <= minimum:
#         minimum = num3
#     # check
#     print(minimum)

#     if num1 >= maximum:
#         maximum = num1
#     if num3 >= maximum:
#         maximum = num3
#     # check
#     print(maximum)

#     if medium > num1 and medium > num2:
#         medium != num3
#     if medium < num1 and medium < num2:
#         medium != num3
#     # check
#     print(medium)

#     if user_input == 'Descend':
#         print("%.2f, %.2f, %.2f" % (maximum, medium, minimum))
#     elif user_input == 'Ascend':
#         print("%.2f, %.2f, %.2f" % (minimum, medium, maximum))
#     else:
#         return False
# main()

"""
case 11
"""

# def main():
#     user_input = input()
#     first = float(input())
#     second = float(input())
#     third = float(input())
#     small = 0
#     middle = 0
#     large = 0

#     if first < third and first < second:
#         small = first
#         if second < third and second < first:
#             small = second
#         else:
#             small = third
#     elif first < second and first < third:
#         middle = first
#         if second > first and second < third:
#             middle = second
#         else:
#             middle = third
#     elif first > second and first > third:
#         large = first
#         if second > first and second > third:
#             large = second
#         else:
#             large = third
    
#     if user_input == 'Descend':
#         print("%.2f, %.2f, %.2f" % (large, middle, small))
#     elif user_input == 'Ascend':
#         print("%.2f, %.2f, %.2f" % (small, middle, large))
# main()

"""
case 12
"""

# def main():
#     user_input = input()
#     small = float(input())
#     middle = float(input())
#     large = float(input())

#     if small > middle:
#         small, middle = middle, small
#     if small > large:
#         small, large = large, small
#     if middle > large:
#         middle, large = large, small
    
#     if user_input == 'Ascend':
#         print("%.2f, %.2f, %.2f" % (small, middle, large))
#     elif user_input == 'Descend':
#         print("%.2f, %.2f, %.2f" % (large, middle, small))
# main()

"""
case 13
"""

# def main():
#     string = input()
#     str1 = list(string)
#     strlist = []
#     for j in str1:
#         if j not in strlist:
#             strlist.append(j)
#             count = 0
#         for i in range(len(str1)):
#             if j == str1[i]:
#                 count += 1
#         print("{}{}".format(j, count))
# main()

"""
case 14
"""

# def main():
#     string = input()
#     freq = [None] * len(string)
#     for i in range(0, len(string)):
#         freq[i] = 1
#         for j in range(i+1, len(string)):
#             if (string[i] == string[j]):
#                 freq[i] = freq[i] + 1
#                 string = string[ : j] + '0' + string[j+1 : ]
#     for i in range(0, len(freq)):  
#         if (string[i] != ' ' and string[i] != '0'):
#             result = string[i] + str(freq[i])
#             print(result)
# print(main())

"""
case 15
"""

# def decode():
#     text = input()
#     result = ""
#     if text != "":
#         for i in range(0, len(text), 2):
#             num = int(text[i])
#             ch = text[i + 1]
#             result = result + ch * num
#     return result
# print(decode())

"""
case 16
"""

# txt = "Hello"
# if txt[0].isnumeric:
#     print("YES")
# else:
#     print("NO")
# print(txt[0])

# if "Hello".isnumeric == True:
#     print("correct")
# else:
#     print("incorrect")
    
# if "Hello".isnumeric:
#     print("correct")
# else:
#     print("incorrect")

# """inflation"""
# from math import trunc

# def truncate(n, d = 0):
#     # if d > 0:
#     #     return trunc(n * 10 ** d) / (10 ** d)
#     # else:
#     #     return trunc(n)
#     return trunc(n * 10 ** d) / (10 ** d) if d > 0 else trunc(n)

# def main():
#     cost = float(input())
#     cost = truncate(cost, 2)
#     years = int(input())
#     percent = 103.81
#     for i in range(years):
#         cost = cost * percent / 100
#         cost = truncate(cost, 2)
#     print(cost)
# main()