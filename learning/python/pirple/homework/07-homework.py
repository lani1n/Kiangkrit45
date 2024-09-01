# Homework #8 - I/O

import os

def take_note():
    print("Start to take note.")
    ask_file_name()

def ask_file_name():
    file_name = input("Please enter the file name:\n")
    file_path = f"./{file_name}.txt"
    if file_exist(file_path):
        ask_file_mode(file_path)
    else:
        ask_file_input(file_path)

def file_exist(file_path):
    if os.path.exists(file_path) and os.path.isfile(file_path):
        return True
    return False

def ask_file_input(file_path):
    txt = input("Please write down the content:\n")
    write_file(file_path, txt+"\n")
    print("Content written...")

def ask_file_mode(file_path):
    choice = input("\nWhat do you wish to do? Enter the number against the choice.\n1 read the file\n2 delete the file and start over\n3 append the file\n4 replace a single line\n\n")
    if choice == "1":
        txt = read_file(file_path)
        print("*****YOUR FILE*****")
        print(txt)
        print("**********")
    elif choice == "2":
        delete_file(file_path)
        empty_file(file_path)
        print("File has been deleted and empty one is made.")
    elif choice == "3":
        txt = input("Please enter the content, you wish to add:\n\n")
        append_file(file_path, txt)
        print("Content added")
    elif choice == "4":
        update_line(file_path)
    else:
        print("Please try again! This is an invalid option!")

def update_line(file_path):
    line_counter = 1
    line_array = []
    with open(file_path, "r") as file:
        for line in file:
            print(f"{line_counter} {line}")
            line_counter += 1
            line_array.append(line)
    line_num = int(input("Enter the line number you would like to replace:\n"))
    if line_num <= len(line_array):
        txt = input("Enter the new line:\n")
        line_array[line_num - 1] = txt
        paragraph = ("\n").join(line_array)
        write_file(file_path, paragraph)
        print("\nFile content has been replaced.")
    else:
        print("Sorry, invalid line number!")

def write_file(file_path, content):
    file = open(file_path, "w")
    file.write(content)
    file.close()

def read_file(file_path):
    content = ""
    with open(file_path, "r") as file:
        for line in file:
            content = content + line
    return content

def append_file(file_path, txt):
    file = open(file_path, "a")
    file.write(txt)
    file.close()

def delete_file(file_path):
    os.remove(file_path)

def empty_file(file_path):
    file = open(file_path, "w")
    file.close()

take_note()