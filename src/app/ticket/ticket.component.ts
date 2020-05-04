import { Component, OnInit, Input, ElementRef, ViewChild, TemplateRef, Output, EventEmitter } from '@angular/core';
import { Ticket } from '../models/ticket.model';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  @Input()
  data: Ticket;
  @Output()
  deleteEvent = new EventEmitter<null>();
  constructor() {
  }

  ngOnInit(): void {

  }
  deleteTicket() {
    this.deleteEvent.emit(null);
  }

}
