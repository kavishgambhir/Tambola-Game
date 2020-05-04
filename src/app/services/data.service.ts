import { Injectable } from '@angular/core';
import { Player } from '../models/player.model'
import { Ticket } from '../models/ticket.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  numbersCalled: Map<number, boolean>;
  numberList: Array<number> = [];
  currentNumber: number;
  players: Player[];
  constructor() {
    this.resetGridData();
    this.players = [];
  }

  updateGridData(numbersCalled: Map<number, boolean>, numberList: Array<number>, currentNumber: number) {
    this.currentNumber = currentNumber;
    this.numberList = numberList;
    this.numbersCalled = numbersCalled;
  }

  resetGridData() {
    this.currentNumber = 0;
    this.numbersCalled = new Map();
    this.numberList = [];
  }

  addPlayer(player: Player) {
    this.players.push(player);
  }
  deletePlayer(playerIndex: number) {
    this.players.splice(playerIndex, 1);
  }

  addTicket(playerIndex: number) {
    this.players[playerIndex].tickets.push(new Ticket(this.players[playerIndex].playerName, this.players[playerIndex].currentTicketId));
    this.players[playerIndex].currentTicketId++;
  }

  deleteTicket(playerIndex: number, ticketIndex: number) {
    this.players[playerIndex].tickets.splice(ticketIndex, 1);
  }
}
