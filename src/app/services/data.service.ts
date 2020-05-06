import { Injectable } from '@angular/core';
import { Player } from '../models/player.model'
import { Ticket } from '../models/ticket.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  numbersCalled: Map<number, boolean>;
  numberList: Array<number>;
  currentNumber: number;
  players: Player[];
  constructor() {
    this.currentNumber = 0;
    this.numbersCalled = new Map();
    this.numberList = [];
    this.players = [];
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      let value = localStorage.getItem(key);
      if (key == 'players')
        this.players = JSON.parse(value);
      if (key == 'numbersCalled')
        this.numbersCalled = new Map(JSON.parse(value));
      if (key == 'numberList')
        this.numberList = JSON.parse(value);
      if (key == 'currentNumber')
        this.currentNumber = JSON.parse(value);
    }

  }

  updateGridData(numbersCalled: Map<number, boolean>, numberList: Array<number>, currentNumber: number) {
    this.currentNumber = currentNumber;
    this.numberList = numberList;
    this.numbersCalled = numbersCalled;
    localStorage.setItem('numbersCalled', JSON.stringify(Array.from(numbersCalled.entries())));
    localStorage.setItem('currentNumber', JSON.stringify(this.currentNumber));
    localStorage.setItem('numberList', JSON.stringify(this.numberList));


  }

  resetGridData() {
    this.currentNumber = 0;
    this.numbersCalled = new Map();
    this.numberList = [];
    localStorage.removeItem('numbersCalled')
    localStorage.removeItem('currentNumber')
    localStorage.removeItem('numberList')
  }

  addPlayer(player: Player) {
    this.players.push(player);
    localStorage.setItem('players', JSON.stringify(this.players));
  }
  deletePlayer(playerIndex: number) {
    this.players.splice(playerIndex, 1);
    localStorage.setItem('players', JSON.stringify(this.players));

  }

  addTicket(playerIndex: number) {
    this.players[playerIndex].tickets.push(new Ticket(this.players[playerIndex].playerName, this.players[playerIndex].currentTicketId));
    this.players[playerIndex].currentTicketId++;
    localStorage.setItem('players', JSON.stringify(this.players));

  }

  deleteTicket(playerIndex: number, ticketIndex: number) {
    this.players[playerIndex].tickets.splice(ticketIndex, 1);
    localStorage.setItem('players', JSON.stringify(this.players));
  }
}
