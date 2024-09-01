import os
from PIL import Image

# Get the path to the "mypic" folder
cwd = os.getcwd()

# Set the compression quality
quality = 75

# Create the "compressed" folder if it doesn't exist
compressed_path = os.path.join(cwd, 'compressed')
if not os.path.exists(compressed_path):
    os.mkdir(compressed_path)

# Get a list of all files in the "mypic" folder
mypic_files = os.listdir(cwd)

# Get a list of all image files in the "mypic" folder (ignoring the "compressed" folder)
image_files = [f for f in mypic_files if (f.endswith('.jpg') or f.endswith('.jpeg') or f.endswith('.png')) and f not in os.listdir(compressed_path)]

# Loop through each image file and compress it
for filename in image_files:
    # Open the original image file
    img = Image.open(os.path.join(cwd, filename))

    # Resize the image to a smaller size
    width, height = img.size
    new_size = (int(width*1), int(height*1))
    img = img.resize(new_size)

    # Compress the image with a lower quality setting and save it to the "compressed" folder
    compressed_filename = os.path.join(compressed_path, '' + filename)
    img.save(compressed_filename, quality=quality)

# Check that the number of files in the "mypic" and "compressed" folders are the same
mypic_files = [f for f in os.listdir(cwd) if os.path.isfile(os.path.join(cwd, f))]
compressed_files = [f for f in os.listdir(compressed_path) if os.path.isfile(os.path.join(compressed_path, f))]
if len(mypic_files) != len(compressed_files):
    print('Error: The number of files are not the same')
else:
    print('Success: All image files have been compressed')
