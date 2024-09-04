import datetime

def calculate_future_time(days=0, hours=0, minutes=0):
    current_time = datetime.datetime.now()
    future_time = current_time + datetime.timedelta(days=days, hours=hours, minutes=minutes)
    return future_time

def main():
    print("Future Time Calculator")
    print("Enter the amount of time to add (leave blank for 0):")
    
    days = int(input("Days: ") or 0)
    hours = int(input("Hours: ") or 0)
    minutes = int(input("Minutes: ") or 0)
    
    future_time = calculate_future_time(days, hours, minutes)
    current_time = datetime.datetime.now()
    
    print(f"\nCurrent time: {current_time}")
    print(f"Future time: {future_time}")
    print(f"Time difference: {future_time - current_time}")

if __name__ == "__main__":
    main()