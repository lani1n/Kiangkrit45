def oneProperty(a, b, c):
    if (a == b):
        print(True)
    elif (a == c):
        print(True)
    elif (b == c):
        print(True)
    else:
        print(False)
par1 = 1 / 1 # 1
par2 = 1 + 1 # 2
par3 = 1 * 1 # 1
oneProperty(par1, par2, par3)

# extra credit
par4 = "1" + "1" # 11
par5 = 11 # 11
oneProperty(par2, int(par4), par5)