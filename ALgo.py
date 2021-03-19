

def loop(i):
    
    while i <= 5:
        if i==3:
            print(f'this is a {i} number')
        else:
            print("this is not numbers")
        i = i+1
loop(1)



# Nested while loop
def nestedLoop():
    i = 1
    while i <= 3:
        print('Papa')
        j= 1
        while j <= 2:
            print('Sarah')
            j+=1
        i+=1
        
nestedLoop()



def loop1():
    n = int(input("Enter a number: "))
    nr= 0
    
    while n % 10 != 0:
        c = n%10
        nr= nr * 10 + c
        n = n//10
loop1()
        