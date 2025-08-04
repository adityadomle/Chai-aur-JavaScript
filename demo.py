# Simple Python Program with Basic Functionalities

def greet():
    print("Welcome to the Python App!")
    name = input("What's your name? ")
    print(f"Hello, {name}! Let's begin.")

def menu():
    print("\nChoose an option:")
    print("1. Add two numbers")
    print("2. Subtract two numbers")
    print("3. Multiply two numbers")
    print("4. Divide two numbers")
    print("5. Check even or odd")
    print("6. Exit")

def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    if b != 0:
        return a / b
    else:
        return "Cannot divide by zero."

def even_or_odd(n):
    return "Even" if n % 2 == 0 else "Odd"

def main():
    greet()
    while True:
        menu()
        choice = input("Enter your choice (1-6): ")

        if choice == "6":
            print("Thank you for using the app. Goodbye!")
            break

        if choice in ["1", "2", "3", "4"]:
            x = float(input("Enter first number: "))
            y = float(input("Enter second number: "))

            if choice == "1":
                print("Result:", add(x, y))
            elif choice == "2":
                print("Result:", subtract(x, y))
            elif choice == "3":
                print("Result:", multiply(x, y))
            elif choice == "4":
                print("Result:", divide(x, y))

        elif choice == "5":
            num = int(input("Enter a number: "))
            print("The number is", even_or_odd(num))
        else:
            print("Invalid choice. Please try again.")

main()
