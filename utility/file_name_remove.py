import os

# get the current working directory
cwd = os.getcwd()

# loop through every file in the directory
for file_name in os.listdir(cwd):
    
    # check if the file is a regular file
    if os.path.isfile(file_name):
        
        # 1 standard

        # # # split the file name and extension
        # name, ext = os.path.splitext(file_name)
        
        # # # construct the new file name by adding "_new" to the end of the name
        # new_name = "vol" + name + ext
        
        # 2 remove every character before x

        # find the position of x in the file name
        x_pos = file_name.index("v")
        
        # # construct the new file name by slicing the original file name from the x position to the end
        new_name = file_name[x_pos:]

        # rename the file
        os.rename(file_name, new_name)

        # print a message to show that the file has been renamed
        print(f"Renamed {file_name} to {new_name}")