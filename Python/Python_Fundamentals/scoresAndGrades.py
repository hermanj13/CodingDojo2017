import random

def scoresAndGrades():
    print "Scores and Grades:"
    for i in range(1,10):
        score = round(random.uniform(60,100))

        if(score >= 60 and score < 70):
            print "score:", score, " Your Grade is D"
        elif(score >= 70 and score < 80):
            print "score:", score, " Your Grade is C"
        elif(score >= 80 and score < 90):
            print "score:", score, " Your Grade is B"
        elif(score >= 90):
            print "score:", score, " Your Grade is A"
    print "End of the program. BYE!"

scoresAndGrades()
