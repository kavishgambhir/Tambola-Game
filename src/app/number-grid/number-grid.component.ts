import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-grid',
  templateUrl: './number-grid.component.html',
  styleUrls: ['./number-grid.component.css']
})
export class NumberGridComponent implements OnInit {
  numbersCalled: Map<number, boolean> = new Map();
  numberCount: number;
  numberList:Array<number>=[];
  currentNumber:number;
  synth:SpeechSynthesis;
  constructor() {
    for (var i = 1; i <= 90; i++) {
      this.numbersCalled.set(i, false);
    }
    this.numberCount = 0;
  }
  array(n: number): any[] {
    return Array(n);
  }
  ngOnInit(): void {
    this.synth=window.speechSynthesis
  }
  generate() {
    var nextNumber = Math.floor(Math.random() * 90) + 1;
    if (this.numberCount < 90) {
      while (this.numbersCalled.get(nextNumber) === true && this.numberCount < 90) {
        nextNumber = Math.floor(Math.random() * 90) + 1;
      }
      this.markNumber(nextNumber);
      this.numbersCalled.set(nextNumber, true);
      console.log("called = ", nextNumber);
      this.currentNumber=nextNumber;
      this.numberList.push(nextNumber);
      this.announceNumber(nextNumber.toString());
      this.numberCount++;
    }
    else {
      alert("All numbers called!");
      this.reset();
    }
  }
  announceNumber(nextNumber: string) {
    
    this.synth.cancel();
    var utterThis = new SpeechSynthesisUtterance(nextNumber);
    this.synth.speak(utterThis);
  }
  markNumber(nextNumber: number) {
    var tileId = "tile-" + nextNumber;
    document.getElementById(tileId).classList.add("marked");
  }
  listNum() {
    

  }
  reset() {
    for (let i = 1; i <= 90; i++) {
      var tileId = "tile-" + i;
      document.getElementById(tileId).classList.remove("marked");
    }
    this.currentNumber=null;
    
    this.numberList=new Array<number>();
  }
}
