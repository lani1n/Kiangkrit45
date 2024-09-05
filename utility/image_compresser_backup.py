import os
from PIL import Image

cwd = os.getcwd()

quality = 75

compressed_path = os.path.join(cwd, "compressed")
if not os.path.exists(compressed_path):
    os.mkdir(compressed_path)

mypic_files = os.listdir(cwd)

image_files = [f for f in mypic_files if (f.endswith(".jpg") or f.endswith(".jpeg") or f.endswith(".png")) and f not in os.listdir(compressed_path)]

for filename in image_files:

    img = Image.open(os.path.join(cwd, filename))

    width, height = img.size
    new_size = (int(width*1), int(height*1))
    img = img.resize(new_size)

    compressed_filename = os.path.join(compressed_path, "" + filename)
    img.save(compressed_filename, quality=quality)

mypic_files = [f for f in os.listdir(cwd) if os.path.isfile(os.path.join(cwd, f))]
compressed_files = [f for f in os.listdir(compressed_path) if os.path.isfile(os.path.join(compressed_path, f))]
if len(mypic_files) != len(compressed_files):
    print("Error: The number of files are not the same")
else:
    print("Success: All image files have been compressed")
