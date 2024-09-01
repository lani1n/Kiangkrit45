import os


def get_size(start_path='.'):
    total_size = 0
    for dirpath, dirnames, filenames in os.walk(start_path):
        for f in filenames:
            fp = os.path.join(dirpath, f)
            total_size += os.path.getsize(fp)
    return total_size

def format_size(size_bytes):
    if size_bytes < 1024:
        return f"{size_bytes} B"
    elif size_bytes < 1024 ** 2:
        return f"{size_bytes / 1024:.2f} KB"
    elif size_bytes < 1024 ** 3:
        return f"{size_bytes / 1024 ** 2:.2f} MB"
    else:
        return f"{size_bytes / 1024 ** 3:.2f} GB"

def print_size(start_path='.', output_file=None):
    folder_sizes = []
    file_sizes = []

    for dirpath, dirnames, filenames in os.walk(start_path):
        depth = dirpath.count(os.sep)
        folder_name = os.path.basename(dirpath)

        if depth == 0:
            continue

        folder_size = get_size(dirpath)
        folder_sizes.append((folder_name, folder_size))

        size_str = format_size(folder_size)
        print(f"{' ' * depth * 4}{folder_name}\t{size_str}")

        for f in filenames:
            fp = os.path.join(dirpath, f)
            size = os.path.getsize(fp)
            file_sizes.append((f, size))

    if output_file:
        with open(output_file, 'w', encoding='utf-8') as f:
            for folder_name, folder_size in folder_sizes:
                size_str = format_size(folder_size)
                f.write(f"{folder_name}\t{size_str}\n")

            for file_name, file_size in file_sizes:
                size_str = format_size(file_size)
                f.write(f"{file_name}\t{size_str}\n")

print_size(output_file='file_size.txt')