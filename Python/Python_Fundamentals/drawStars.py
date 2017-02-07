# def draw_stars(arr):
#     for i in arr:
#         y = i * "*"
#         print y
#         y = 0
#
#
# draw_stars([6, 2, 9, 12, 1, 72, 2])

def draw_stars(arr):
    for i in range(0, len(arr)):
        if(isinstance(arr[i],str)):
            mult = len(arr[i])
            y = mult * arr[i][:1]
            print y
            y = 0
        elif(isinstance(arr[i],int)):
            y = arr[i] * "*"
            print y
            y = 0



draw_stars([4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"])
