import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NumberCallService } from '../services/number-call.service';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers';
import { generate } from 'rxjs';
import { GenerateNumber } from '../actions/number-grid.actions';

@Component({
  selector: 'app-number-grid',
  templateUrl: './number-grid.component.html',
  styleUrls: ['./number-grid.component.css']
})
export class NumberGridComponent implements OnInit {
  numbersCalled: Map<number, boolean>;
  numberList: Array<number> = [];
  currentNumber: number;
  @Output() numberGenerateEvent: EventEmitter<any> = new EventEmitter();
  @Output() numberResetEvent: EventEmitter<any> = new EventEmitter();
  synth: SpeechSynthesis;
  constructor(private numberService: NumberCallService, private store: Store<AppState>) {
    store.select(state => state.numberGrid).subscribe(res => {
      console.log(res);
      // console.log(res.numbersCalled)
      this.numbersCalled = Object.assign(res.numbersCalled);
      this.numberList = Object.assign([], res.numberList);
      // this.numberList=res.numberList;
      this.currentNumber = res.currentNumber;
    });
  }
  array(n: number): any[] {
    return Array(n);
  }
  ngOnInit(): void {
    this.synth = window.speechSynthesis

  }
  ngAfterViewInit() {
    this.numbersCalled.forEach(this.markNumber);

  }
  generate() {
    var nextNumber = Math.floor(Math.random() * 90) + 1;
    if (this.numberList.length < 90) {
      while (this.numbersCalled.get(nextNumber) === true && this.numberList.length < 90) {
        nextNumber = Math.floor(Math.random() * 90) + 1;
      }
      this.markNumber(true,nextNumber,null);
      this.numbersCalled.set(nextNumber, true);
      console.log("called = ", nextNumber);
      this.currentNumber = nextNumber;
      this.numberService.calledNumber = this.currentNumber;
      // this.numberList = Object.assign([], this.numberList) //why
      this.numberList.push(nextNumber);
      this.announceNumber(nextNumber.toString());
      this.numberGenerateEvent.emit({
        currentNumber: this.currentNumber,
        numbersCalled: this.numbersCalled,
        numberList: this.numberList,
      });
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
  markNumber(hasOccured:boolean,number: number,_:Map<number,boolean>) {
    if(hasOccured){
    var tileId = "tile-" + number;
    document.getElementById(tileId).classList.add("marked");
    }
  }

  reset() {
    for (let i = 1; i <= 90; i++) {
      var tileId = "tile-" + i;
      document.getElementById(tileId).classList.remove("marked");
    }
    this.numberResetEvent.emit();
  }
}
