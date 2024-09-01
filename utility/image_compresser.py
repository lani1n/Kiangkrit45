import os
from PIL import Image

# Get the current working directory
cwd = os.getcwd()

# Set the compression quality
quality = 75

# Loop through all files in the folder
for filename in os.listdir(cwd):
    # Check if the file is an image file (JPG or PNG)
    if filename.endswith('.jpg') or filename.endswith('.png'):
        # Open the original image file
        img = Image.open(filename)

        # Resize the image to a smaller size
        width, height = img.size
        new_size = (int(width*1), int(height*1))
        img = img.resize(new_size)

        # Compress the image with a lower quality setting
        compressed_filename = 'new_' + filename
        img.save(compressed_filename, quality=quality)