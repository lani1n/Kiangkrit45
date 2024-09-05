import os

cwd = os.getcwd()
files = os.listdir(cwd)
num_digits = len(str(len(files)))

for i, file_name in enumerate(files):
    if os.path.isfile(os.path.join(cwd, file_name)):
        name, ext = os.path.splitext(file_name)
        index_str = str(i+1).zfill(num_digits)
        new_file_name = "" + index_str + ext
        os.rename(os.path.join(cwd, file_name), os.path.join(cwd, new_file_name))
        print(f"Renamed {file_name} to {new_file_name}")