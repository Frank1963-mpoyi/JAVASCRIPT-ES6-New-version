#calculator 

def calculator():
    
    number1 = float(input("Enter Numb1 : "))
    operator = input("Enter Operator: ")
    number2 = float(input("Enter Numb2 : "))
    
    if operator == '+':
        print(number1 + number2)
    elif operator == '-':
        print(number1 - number2)
    elif operator == '*':
        print(number1 * number2)
    elif operator == '/':
        print(number1 - number2)
    else:
        print('Enter a valid operator')


calculator()