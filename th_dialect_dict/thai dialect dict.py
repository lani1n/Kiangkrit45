import os

def read_txt_files_in_directory(directory_path):
    try:
        # Check if the directory exists
        if not os.path.isdir(directory_path):
            raise NotADirectoryError(f"Error: '{directory_path}' is not a valid directory.")

        # Iterate through all files in the directory
        for filename in os.listdir(directory_path):
            if filename.endswith('.txt'):
                file_path = os.path.join(directory_path, filename)
                print(f"\nReading file: {filename}")
                print("-" * 20)
                try:
                    with open(file_path, 'r', encoding='cp1252') as file:
                        content = file.read()
                        print(content)
                except UnicodeDecodeError:
                    print(f"Error: The file '{filename}' could not be decoded using UTF-8.")
                except IOError:
                    print(f"Error: There was an issue reading the file '{filename}'.")

    except NotADirectoryError as e:
        print(e)
    except PermissionError:
        print(f"Error: You don't have permission to access the directory '{directory_path}'.")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")

# Example usage
directory_path = 'C://Users//Kiang//OneDrive//Documents//NECTEC//ว่าจ้างงาน Dictionary//TH dialect dictionaries//คลังคำ'
read_txt_files_in_directory(directory_path)