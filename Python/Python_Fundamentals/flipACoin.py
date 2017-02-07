import random
def flipACoin(num):
    heads = 0
    tails = 0
    for i in range(1,num+1):
        flip = round(random.uniform(0,1))
        if(flip == 1):
            heads += 1
            print "Attempt", i, "Throwing a coin... It's heads! ... Got", heads, "head(s) so far and", tails, "tail(s) so far"
        else:
            tails += 1
            print "Attempt", i, "Throwing a coin... it's tails! ... Got", heads, "head(s) so far and", tails, "tail(s) so far"



flipACoin(5000)
