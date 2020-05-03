import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Ticket } from '../models/ticket.model';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  tickets: Ticket[];
  currentTicketId: number;

  @Input()
  name: string;

  @Output() 
  deleteEvent = new EventEmitter<null>();


  constructor() {
    this.currentTicketId = 1;
    this.tickets=[];
  }

  createTicket() {
    this.tickets.push(new Ticket(this.name,this.currentTicketId));
    this.currentTicketId += 1;
  }
  deleteTicket(index: number) {
    this.tickets.splice(index, 1);
  }
  ngOnInit(): void {
    this.createTicket();
  }
  ngOnDestroy() {
    console.log(name,' player component destroyed');
  }
  deletePlayer() {
    this.deleteEvent.emit(null);
  }

}
