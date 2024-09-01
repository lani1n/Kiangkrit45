# Lecture: Error Handling

from typing import final


key_word = "Hello"

try:
    print(int(key_word))
except:
    pass
    print("Entered exception")
print("Past Exception")

try:
    raise NameError
except ValueError:
    print("Got a ValueError")
except:
    print("Other types of exception")
    raise
finally:
    print("Finally")
print("Past exception")