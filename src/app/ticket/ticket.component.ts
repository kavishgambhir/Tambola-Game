import { Component, OnInit, Input, ElementRef, ViewChild, TemplateRef } from '@angular/core';
import { Ticket } from '../models/ticket.model';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  @Input()
  data:Ticket;

  constructor() {
    if(this.data==undefined) this.data=new Ticket();

  }


  ngOnInit(): void {

  }

}
