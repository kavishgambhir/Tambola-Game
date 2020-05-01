import { Component, OnInit, Input } from '@angular/core';
import { TicketComponent } from '../ticket/ticket.component'

class Player {
  tickets: TicketComponent[];
  currentTicketId: number;

  @Input()
  name: string;
  constructor(name: string) {
    this.name = name;
    this.currentTicketId = 1;
    this.createTicket();
  }

  createTicket() {
    this.tickets.push(new TicketComponent());
    this.currentTicketId += 1;
  }
  deleteTicket(index: number) {
    this.tickets.splice(index, 1);
  }
}

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
