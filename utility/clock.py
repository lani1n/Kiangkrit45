import datetime

def round_to_minute(dt):
    return dt.replace(second=0, microsecond=0) + datetime.timedelta(minutes=dt.second//30)

def calculate_future_time(days=0, hours=0):
    current_time = round_to_minute(datetime.datetime.now())
    future_time = current_time + datetime.timedelta(days=days, hours=hours)
    return future_time

def format_time_difference(timedelta):
    days = timedelta.days
    hours, remainder = divmod(timedelta.seconds, 3600)
    if days == 0 and hours == 0:
        return "invalid"
    elif days == 0:
        return f"{hours} hour{'s' if hours != 1 else ''}"
    elif hours == 0:
        return f"{days} day{'s' if days != 1 else ''}"
    else:
        return f"{days} day{'s' if days != 1 else ''}, {hours} hour{'s' if hours != 1 else ''}"

def main():
    try:
        days = int(input("Days: ") or 0)
        hours = int(input("Hours: ") or 0)
    except ValueError:
        print("Invalid input")
        return

    current_time = round_to_minute(datetime.datetime.now())
    future_time = calculate_future_time(days, hours)
    time_difference = future_time - current_time

    print(f"\nCurrent time: {current_time}")
    print(f"Future time: {future_time}")
    print(f"Time difference: {format_time_difference(time_difference)}")

if __name__ == "__main__":
    main()