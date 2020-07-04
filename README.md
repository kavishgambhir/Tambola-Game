# Player Dashboard

It adds players for the game, each player has a ticket generated. Further Multiple tickets can be added/deleted for each player.
Click on the player name to expand all the tickets.
Multiple Players can further be added and deleted.


# Ticket Generation

Below mentioned are the constraints for each ticket:
* The numbers are used between 1 to 90. 
* In the first column can contain the numbers from 1 to 9, the second column from numbers 10 to 19, etc, all the way to the 9th column which can contain numbers 80 to 90 in it.
* Every row must have exactly 5 numbers in it.
* The 3 cell vertical column can have 1 or atmax 2 numbers in it but never zero numbers.
* In each 3 cell vertical column, the numbers are sorted with lower numbers higher than larger numbers.
* A ticket contains 15 numbers with no duplicates.


## Logic for ticket Creation:

Algorithm is divided into two parts.


##### First part: Find and store the 15 unique numbers as per constraints.

- Loop for each column and store a random number for each column eg rand(20,29) for col-3 .
- Loop for remaining 6 numbers generating random numbers from 1-90, ignore if already included in above step or if the respected column for the number aready has 2 numbers.This prevents it from running into a corner case where it can't finish successfully, but reduces the chance of having a full column.
- Sort the list of 15 numbers in ascending order.

##### second part: Populate the numbers on the ticket as per the constraints.
- Pick a row randomly form 0-2
- iterate through the 15 generated numbers above
- get the column for the current number for eg for number 23 the col is 2 and populate the grid at Grid[row][col] with current Number
- row=(row+1)%3 for next iteration for randomised population (minimum number adjacent)
- check for violation of vertical ordering and swap numbers in each column if violated(vertical sorting)

# Number Generator(Home)

It generates random numbers from 1-90 and marks it on the grid and calls out the number. Last called number is marked differently.

In between a game a players **tickets can be verified** with the called numbers. The currently called numbers are marked on each ticket of each player if that ticket contains the number.

The list of numbers called can be viewed by clicking on 'Show List'


# Tambola-Game
Tambola Game built on Angular, Generates tickets for multiple players and calls numbers

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

