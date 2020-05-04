import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Ticket } from '../models/ticket.model';
import { DataService } from '../services/data.service'
@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  tickets: Ticket[];
  currentTicketId: number;

  playerName: string;

  @Input()
  playerIndex: number
  @Output()
  deleteEvent = new EventEmitter<null>();


  constructor(private data: DataService) {
  }

  createTicket() {
    this.data.addTicket(this.playerIndex);
  }
  deleteTicket(index: number) {
    this.data.deleteTicket(this.playerIndex, index);

  }
  ngOnInit(): void {

    this.playerName = this.data.players[this.playerIndex].playerName;
    this.currentTicketId = this.data.players[this.playerIndex].currentTicketId;
    this.tickets = this.data.players[this.playerIndex].tickets;
  }

  deletePlayer() {
    this.deleteEvent.emit(null);
  }

}
