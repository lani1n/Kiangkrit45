import os

cwd = os.getcwd()

for file_name in os.listdir(cwd):
    if os.path.isfile(file_name):
        
        # 1 standard

        # # # split the file name and extension
        # name, ext = os.path.splitext(file_name)
        
        # # # construct the new file name by adding "_new" to the end of the name
        # new_name = "vol" + name + ext
        
        # 2 remove every character before x

        x_pos = file_name.index("v")
        new_name = file_name[x_pos:]
        os.rename(file_name, new_name)
        print(f"Renamed {file_name} to {new_name}")