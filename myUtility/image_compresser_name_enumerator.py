import os
from PIL import Image

# Get the path to the "mypic" folder
cwd = os.getcwd()

# Set the compression quality
quality = 75

# Create the "compressed" and "failed" folders if they don't exist
compressed_path = os.path.join(cwd, 'compressed')
if not os.path.exists(compressed_path):
    os.mkdir(compressed_path)
failed_path = os.path.join(cwd, 'failed')
if not os.path.exists(failed_path):
    os.mkdir(failed_path)

# Initialize a counter for the renamed files
counter = 1

# Initialize counters for compressed and failed files
compressed_files = 0
failed_files = 0

# Initialize counters for original and compressed file sizes
original_size = 0
compressed_size = 0

# Loop through each file and compress/rename it if it's an image file
for root, dirs, files in os.walk(cwd):
    for filename in files:
        if (filename.endswith('.jpg') or filename.endswith('.jpeg') or filename.endswith('.png')):
            old_path = os.path.join(root, filename)

            try:
                # Open the original image file
                img = Image.open(old_path)

                # Get the image format and create the new file name
                file_type = img.format
                if file_type is None:
                    raise ValueError("Unsupported image format")
                file_type = file_type.lower()
                new_name = str(counter).zfill(5) + '.' + file_type
                counter += 1

                # Resize the image to a smaller size
                width, height = img.size
                new_size = (int(width*1), int(height*1))
                img = img.resize(new_size)

                # Compress the image with a lower quality setting and save it to the "compressed" folder
                new_path = os.path.join(compressed_path, new_name)
                img.save(new_path, quality=quality)

                # Print progress message
                print(f"Processed: {filename} -> {new_name}")

                # Increment counters for compressed files and compressed file size
                compressed_files += 1
                original_size += os.path.getsize(old_path)
                compressed_size += os.path.getsize(new_path)

            except Exception as e:
                # If there's an error, move the file to the "failed" folder
                print(f"Error: {filename} ({e})")
                rel_path = os.path.relpath(root, cwd)
                os.makedirs(os.path.join(failed_path, rel_path), exist_ok=True)
                os.rename(old_path, os.path.join(failed_path, rel_path, filename))

                # Increment counter for failed files
                failed_files += 1

# Print summary message
print(f"Compressed {compressed_files} files and failed to compress {failed_files} files.")
print(f"Saved {((original_size - compressed_size)/1024)/1024:.2f} MB in total.")
