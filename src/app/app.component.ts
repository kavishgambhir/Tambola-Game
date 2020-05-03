import { Component } from '@angular/core';
import { AppState } from './reducers';
import { Store } from '@ngrx/store';
import {GenerateNumber,ResetNumberGrid,ActionsUnion} from './actions/number-grid.actions'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tambola-app';
  currentNumber: Observable<number>;
  numberGrid: Observable<Map<number,boolean>>;
  constructor(private store:Store<AppState>){
    // store.select(state => state.numberGrid).subscribe(res =>   {
    //   console.log(res,"number grid logged from app component");
    //   });
  }

onActivate(componentReference) {
  //  console.log(componentReference)


   //Below will subscribe to the numberGenerateEvent emitter
   if(componentReference.numberGenerateEvent)
   componentReference.numberGenerateEvent.subscribe((data) => {
      // Will receive the data from child here 
       console.log("generateNumber Event in appComponent");
              this.store.dispatch(new GenerateNumber(data));
      
   })
   if(componentReference.numberResetEvent)
   componentReference.numberResetEvent.subscribe(() => {
    // Will receive the data from child here 
     console.log("numberGridReset Event in appComponent");
            this.store.dispatch(new ResetNumberGrid);
    
 })
   
}
}
