favSong = {
    "title": "Treat You Better",
    "artist": "Shawn Mendes",
    "album": "Illuminate",
    "genre": "pop",
}

def guessSong(key, value):
    if key in favSong and value == favSong[key]:
        # print("True")
        return True
    else:
        # print("False")
        return False

guessSong(input("Guess the category: "), input("Guess the answer: "))

for i in favSong:
    print(i + ":", favSong[i])