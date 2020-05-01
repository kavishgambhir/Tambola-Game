import { Component, OnInit, Input } from '@angular/core';
import { InjectSetupWrapper } from '@angular/core/testing';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  @Input()
  ticketId: number
  @Input()
  playerName: string
  numbersMap: Map<number, boolean> = new Map();
  numberList: Array<number> = [];
  ticketGrid: Array<Array<number>>;
  numbersPosition: Map<number, []> = new Map();

  constructor() {
    this.ticketGrid = []
    for (var i = 0; i < 3; i++) this.ticketGrid.push([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  }
  ngOnDestroy()
  {
    console.log("ticket destroyed");
  }
  createNumbersForTicket() {
    var columnDoubleCount = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (var i = 1; i <= 9; i++) {
      var currNumber = this.genNumberForColumn(i);
      while (this.numbersMap.has(currNumber)) currNumber = this.genNumberForColumn(i);
      this.numbersMap.set(currNumber, true);
    }
    // for (var [m, n] of (this.numbersMap)) {
    //   console.log(m)
    // }
    for (var x = 1; x <= 6;) {
      var randomNumber = Math.floor(Math.random() * 90) + 1;
      if (this.numbersMap.has(randomNumber)) continue;
      var columnCheck = randomNumber == 90 ? 8 : Math.floor(randomNumber / 10);
      if (columnDoubleCount[columnCheck] == 1) continue;
      this.numbersMap.set(randomNumber, true);
      // console.log(' 2nd number at column == ', columnCheck);
      columnDoubleCount[columnCheck] = 1;
      x++;
    }
    // console.log("size--", this.numbersMap.size)
    for (var [m, n] of (this.numbersMap)) {
      this.numberList.push(m)
    }

    this.numberList.sort(function (a: number, b: number) { return a - b })
  }


  ngOnInit(): void {
    this.createNumbersForTicket();
    this.populateTicket();
    console.log(this.ticketGrid)

  }
  populateTicket() {
    var row = Math.floor(Math.random() * (3))
    for (let i = 0; i < this.numberList.length; i++) {
      let num = this.numberList[i]
      let col = num == 90 ? 8 : Math.floor(num / 10);
      this.ticketGrid[row][col] = num
      row = (row + 1) % 3
    }

    console.log(this.ticketGrid)

    for (let i = 0; i < 9; i++) //row wise sort/swap 
    {
      let r1 = -1, r2 = -1
      if (this.ticketGrid[0][i] != 0) r1 = 0
      if (this.ticketGrid[1][i] != 0) {
        if (r1 == -1) r1 = 1
        else
          r2 = 1
      }
      if (this.ticketGrid[2][i] != 0) {
        if (r1 == -1) r1 = 2
        else
          r2 = 2
      }
      if (r2 == -1) continue;
      if (this.ticketGrid[r1][i] > this.ticketGrid[r2][i]) {
        let temp = this.ticketGrid[r1][i]
        this.ticketGrid[r1][i] = this.ticketGrid[r2][i]
        this.ticketGrid[r2][i] = temp
      }

    }
  }




  genNumberForColumn(colNumber: number) {
    var max = colNumber * 10;
    var min = (colNumber - 1) * 10;
    if (colNumber == 9)
      return Math.floor(Math.random() * (max - min + 1) + min); // min and max included 
    var ret = Math.floor(Math.random() * (max - min) + min); //  max  not included 
    while (ret == 0) ret = Math.floor(Math.random() * (max - min) + min); //  since 0 is not desirable
    return ret;
  }

}
