from datetime import date

today = date.today()
print("Today is:", today)
print("day:", today.day)
print("month:", today.month)
print("year:", today.year)

print(today.strftime("%A, %dth of %B %Y"))

next_year = today.replace(year = today.year + 1)

print(today.replace(year = today.year + 1))

difference = abs (next_year - today)
print("only {} days until next year" .format(difference.days))

chernobyl = datetime.fromisoformat("1986-04-26 01:23:40:000+04:00") #date and time and timezone sample
print("the nuclear disaster in chernobyl occured on:", chernobyl)
print(chernobyl.strftime("The Chernobyl disaster occured on %A %b %dth %Y at %X MSD(%Z)"))