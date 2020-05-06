import { Component, HostListener } from '@angular/core';
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
  constructor(){


  }
  @HostListener('window:beforeunload', ['$event'])
  beforeunloadHandler(event) {
      return false;
  }

}
