# Math-Terminal
A new working Math Terminal built completely in node js

## Requirements
- Nodejs Installed.
- Windows OS 
- or you can install cmd on different os to run in your desired os

## Execution
Run the test.bat file in test folder

# Terminal Steps

After opening the ```test.bat``` file.

you will get a following console:
```console
Starting.....

[Server Started]
[Initializing]

Welcome to Module Terminal v1.0
Please login to proceed

[Terminal]:
```

Then you type in the terminal ```net user login```.
You will get a following reply:
```console
Warning!!

This Application Wants To Make Changes To Your Device:
Name: Account Control
Publisher: Sayyed Ali

[(Type in 'any number') [Password]]:
```

you should type The number given in the Braccket

e.g:
```console
[(Type in 4249) [Password]]: 4249
```

Then you will get a following reply..
```console
Permission Granted!


User:
Password:
```

You have two option to enter in the user field:

## If you enter ```Sayyed Ali```

At the beginning you must run ```console net user list```
e.g. (This will take time 30-50 seconds)
```console
[Terminal]: net user list
```

Then you will get a following list.:
```console
Users:              Password:                                                                          Added:
1. Sayyed Ali       (A hashed password)(Encrypted)             May 22 (Monday) 10:01 AM (GMT +3:00)
2. Admin            NaN                                                                                  May 22 (Monday) 9:06 PM (GMT +3:00)
```

then you must copy the password and paste it in the password fiels.
for example, the hashed password is $2b$19$TXFjS/j9fotxqnOX2mKoOuKMBcka3Cz966mBBj4eMGQVTLKXsf0kW
```console
User: Sayyed Ali
[Hash or Plain] Password: $2b$19$TXFjS/j9fotxqnOX2mKoOuKMBcka3Cz966mBBj4eMGQVTLKXsf0kW
```

it will take another 30 to 40 seconds to verify.
- If you paste a wrong hash you can not login with user Sayyed Ali.

- Congrats! You entered my application

## if you enter ```admin``` in te user field

Then no worries! You can leave the Password Field Blank.!
You will enter my app.

# Application
You will get a following interface.
```console
Welcome to Module Mathjs App. type help() to get info
Starting Application...
Succesfully Logged IN as (username)...

Application Started

[module mjs]>>>
```

for list of functions.
You must type> ```Help``` in the ```[module mjs]>>>``` field

You wil get a following interface
```console
Help Station
What Help do you want.

Enter 'exit()' for leaving
Enter [exit -f] for exitting the cli
Enter 'full' for full function list
Enter build() for build Details

[Help Terminal]>>>
```

There are steps given. So you dont have to worry.

- To exit You must type ```exit``` in ```[module mjs]>>>``` Field

It will return You to the terminal
And type ```exit``` again in the ```[Terminal]:``` field to exit the app.

# Over
That was it. 
I created it as a fun and im only 13 years old so please appriciate my work.

Thanks!
