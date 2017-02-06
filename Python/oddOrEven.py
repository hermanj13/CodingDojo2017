def odd_even(x,y):
    for i in range(x,y+1):
        if (i%2 != 0):
            print "number is ",  i, "this is an odd number."
        else:
            print "number is ",  i, "this is an even number."


odd_even(1,2000)
