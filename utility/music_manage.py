import os
import stagger

cwd = os.getcwd()

artist = 'Various Artists'
album = 'Unknown'

audio_files = [f for f in os.listdir(cwd) if f.endswith('.mp3') or f.endswith('.m4a')]

audio_files.sort()

for i, audio_file in enumerate(audio_files):
    track_num = str(i + 1)
    audio = stagger.read_tag(os.path.join(cwd, audio_file))
    audio.artist = artist
    audio.album = album
    audio.track = track_num
    audio.write()