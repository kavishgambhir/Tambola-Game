import { Component, OnInit, Input, ElementRef, ViewChild, TemplateRef, Output, EventEmitter } from '@angular/core';
import { Ticket } from '../models/ticket.model';
import { DataService } from '../services/data.service';

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
  constructor(private dataService:DataService) {
  }

  ngOnInit(): void {
  }
  deleteTicket() {
    this.deleteEvent.emit(null);
  }
  markNumber(hasOccured:boolean,number: number,_:Map<number,boolean>) {
    if(hasOccured){
    var tileId = "tile-" + number;
    document.getElementById(tileId).classList.add("marked");
    }
  }
}
