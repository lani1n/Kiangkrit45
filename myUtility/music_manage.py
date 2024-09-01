import os
import stagger

# get current working directory
cwd = os.getcwd()

# set artist and album info
artist = 'Various Artists'
album = 'Unknown'

# get all audio files in the directory
audio_files = [f for f in os.listdir(cwd) if f.endswith('.mp3') or f.endswith('.m4a')]

# sort the files alphabetically by name
audio_files.sort()

# iterate through the files and add track number metadata
for i, audio_file in enumerate(audio_files):
    # set track number metadata
    track_num = str(i + 1)
    # open the audio file with stagger
    audio = stagger.read_tag(os.path.join(cwd, audio_file))
    # set the artist and album metadata
    audio.artist = artist
    audio.album = album
    # set the track number metadata
    audio.track = track_num
    # save the changes to the audio file
    audio.write()