import os
from PIL import Image

cwd = os.getcwd()
quality = 75

compressed_path = os.path.join(cwd, 'compressed')

if not os.path.exists(compressed_path):
    os.mkdir(compressed_path)

failed_path = os.path.join(cwd, 'failed')

if not os.path.exists(failed_path):
    os.mkdir(failed_path)

counter = 1
compressed_files = 0
failed_files = 0
original_size = 0
compressed_size = 0

for root, dirs, files in os.walk(cwd):
    for filename in files:
        if (filename.endswith('.jpg') or filename.endswith('.jpeg') or filename.endswith('.png')):
            old_path = os.path.join(root, filename)

            try:
                img = Image.open(old_path)
                file_type = img.format

                if file_type is None:
                    raise ValueError("Unsupported image format")
                
                file_type = file_type.lower()
                new_name = str(counter).zfill(5) + '.' + file_type
                counter += 1
                width, height = img.size
                new_size = (int(width*1), int(height*1))
                img = img.resize(new_size)
                new_path = os.path.join(compressed_path, new_name)
                img.save(new_path, quality=quality)
                print(f"Processed: {filename} -> {new_name}")

                compressed_files += 1
                original_size += os.path.getsize(old_path)
                compressed_size += os.path.getsize(new_path)

            except Exception as e:
                print(f"Error: {filename} ({e})")
                rel_path = os.path.relpath(root, cwd)
                os.makedirs(os.path.join(failed_path, rel_path), exist_ok=True)
                os.rename(old_path, os.path.join(failed_path, rel_path, filename))
                failed_files += 1

print(f"Compressed {compressed_files} files and failed to compress {failed_files} files.")
print(f"Saved {((original_size - compressed_size)/1024)/1024:.2f} MB in total.")