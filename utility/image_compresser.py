import os
from PIL import Image

cwd = os.getcwd()
quality = 75

for filename in os.listdir(cwd):
    if filename.endswith('.jpg') or filename.endswith('.png'):
        img = Image.open(filename)
        width, height = img.size
        new_size = (int(width*1), int(height*1))
        img = img.resize(new_size)
        compressed_filename = 'new_' + filename
        img.save(compressed_filename, quality=quality)