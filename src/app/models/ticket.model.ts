export class Ticket {
    readonly ticketId: number
    readonly numbersMap: Map<number, boolean> = new Map(); // used to create ticket
    readonly numberList: Array<number> = [];
    readonly ticketGrid: Array<Array<number>>;
    readonly numbersPosition: Map<number, []> = new Map();
    readonly playerName: string;
    constructor(playerName:string,ticketId:number) {
        this.ticketId = ticketId;
        this.playerName = playerName;
        this.ticketGrid = [];
        for (var i = 0; i < 3; i++) this.ticketGrid.push([0, 0, 0, 0, 0, 0, 0, 0, 0]);
        this.createNumbersForTicket();
        this.populateTicket();
    
    }
    createNumbersForTicket() {
        var columnDoubleCount = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (var i = 1; i <= 9; i++) {
          var currNumber = Ticket.genNumberForColumn(i);
          while (this.numbersMap.has(currNumber)) currNumber = Ticket.genNumberForColumn(i);
          this.numbersMap.set(currNumber, true);
        }
        for (var x = 1; x <= 6;) {
          var randomNumber = Math.floor(Math.random() * 90) + 1;
          if (this.numbersMap.has(randomNumber)) continue;
          var columnCheck = randomNumber == 90 ? 8 : Math.floor(randomNumber / 10);
          if (columnDoubleCount[columnCheck] == 1) continue;
          this.numbersMap.set(randomNumber, true);
          columnDoubleCount[columnCheck] = 1;
          x++;
        }
        for (var [m, n] of (this.numbersMap)) {
          this.numberList.push(m)
        }
    
        this.numberList.sort(function (a: number, b: number) { return a - b })
      }
    populateTicket() {
        var row = Math.floor(Math.random() * (3))
        for (let i = 0; i < this.numberList.length; i++) {
          let num = this.numberList[i]
          let col = num == 90 ? 8 : Math.floor(num / 10);
          this.ticketGrid[row][col] = num
          row = (row + 1) % 3
        }
    
    
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
    static genNumberForColumn(colNumber: number) {
        var max = colNumber * 10;
        var min = (colNumber - 1) * 10;
        if (colNumber == 9)
          return Math.floor(Math.random() * (max - min + 1) + min); // min and max included 
        var ret = Math.floor(Math.random() * (max - min) + min); //  max  not included 
        while (ret == 0) ret = Math.floor(Math.random() * (max - min) + min); //  since 0 is not desirable
        return ret;
      }
}
