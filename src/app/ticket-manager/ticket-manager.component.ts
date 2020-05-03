import { Component, OnInit, Input } from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'app-ticket-manager',
  templateUrl: './ticket-manager.component.html',
  styleUrls: ['./ticket-manager.component.css']
})
export class TicketManagerComponent implements OnInit {

  players: string[]
  constructor() { 
    this.players=[]
  }

  
  addPlayer(name: string) {
    if(name!='')
    this.players.push((name));
  }
  deletePlayer(index: number) {
    this.players.splice(index, 1);
  }
  modify(index: number, name: string) {
    this.players[index] = name;
  }
  ngOnInit(): void {
  }

}
