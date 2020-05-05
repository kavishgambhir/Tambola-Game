import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-number-grid',
  templateUrl: './number-grid.component.html',
  styleUrls: ['./number-grid.component.css']
})
export class NumberGridComponent implements OnInit {
  numbersCalled: Map<number, boolean>;
  numberList: Array<number> = [];
  currentNumber: number;
  breakpoint: number;
  @Output() numberGenerateEvent: EventEmitter<any> = new EventEmitter();
  @Output() numberResetEvent: EventEmitter<any> = new EventEmitter();
  synth: SpeechSynthesis;
  constructor(private data: DataService) {
    this.breakpoint = 10;
    this.numbersCalled = data.numbersCalled;
    this.numberList = data.numberList;
    this.currentNumber = data.currentNumber
  }
  array(n: number): any[] {
    return Array(n);
  }
  ngOnInit(): void {
    this.synth = window.speechSynthesis
    this.breakpoint = (window.innerWidth <= 450) ? 5 : 10;
  }
  ngAfterViewInit() {
    this.numbersCalled.forEach(this.markNumber);

  }
  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 450) ? 5 : 10;
  }
  generate() {
    var nextNumber = Math.floor(Math.random() * 90) + 1;
    if (this.numberList.length < 90) {
      while (this.numbersCalled.get(nextNumber) === true && this.numberList.length < 90) {
        nextNumber = Math.floor(Math.random() * 90) + 1;
      }
      this.markNumber(true, nextNumber, null);
      this.numbersCalled.set(nextNumber, true);
      this.currentNumber = nextNumber;
      this.numberList.push(nextNumber);
      this.announceNumber(nextNumber.toString());
      this.data.updateGridData(this.numbersCalled, this.numberList, this.currentNumber);
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
  markNumber(hasOccured: boolean, number: number, _: Map<number, boolean>) {
    if (hasOccured) {
      var tileId = "tile-" + number;
      document.getElementById(tileId).classList.add("marked");
    }
  }

  reset() {
    for (let i = 1; i <= 90; i++) {
      var tileId = "tile-" + i;
      document.getElementById(tileId).classList.remove("marked");
    }
    this.data.resetGridData();
    this.currentNumber=0;
    this.numberList=[];
    this.numbersCalled=new Map();
  }

}
