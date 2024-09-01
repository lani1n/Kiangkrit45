import os

def count_files(path, output_file):
    total_files = 0
    total_subfolders = 0
    total_empty_folders = 0
    empty_folders = []
    output_str = ''
    for root, dirs, files in os.walk(path):
        folder_name = os.path.basename(root)
        indent_level = root.count(os.path.sep)
        output_str += " " * 2 * indent_level + folder_name + '\n'
        num_files = len(files)
        output_str += " " * 2 * (indent_level + 1) + "has " + str(num_files) + " file(s)\n"
        total_files += num_files
        total_subfolders += len(dirs)
        extensions = set([os.path.splitext(file)[1] for file in files])
        for extension in extensions:
            if extension:
                num_files_ext = len([file for file in files if os.path.splitext(file)[1] == extension])
                output_str += " " * 2 * (indent_level + 1) + "- " + str(num_files_ext) + " file(s) with extension " + extension + "\n"
        if not any([num_files, len(dirs)]):
            total_empty_folders += 1
            empty_folders.append(root)
        output_str += '\n'
    output_str += path + " has " + str(total_files) + " file(s) + " + str(total_subfolders) + " subfolder(s)\n"
    if total_empty_folders:
        output_str += path + " has " + str(total_empty_folders) + " empty folder(s):\n"
        for folder in empty_folders:
            output_str += " " * 2 + folder + '\n'
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(output_str)
    print(output_str)
    
path = os.getcwd()
output_file = os.path.join(path, 'file_counts.txt')
count_files(path, output_file)