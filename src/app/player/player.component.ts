import { Component, OnInit, Input } from '@angular/core';
import { TicketComponent } from '../ticket/ticket.component';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

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
  ngOnInit(): void {
  }

}
