import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../models/player.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-player-dashboard',
  templateUrl: './player-dashboard.component.html',
  styleUrls: ['./player-dashboard.component.css']
})
export class PlayerDashboardComponent implements OnInit {

  players: Player[]
  constructor(private data: DataService) {
    this.players = data.players;
  }

  addPlayer(name: string) {
    if(name!="")
    this.data.addPlayer(new Player(name));
  }
  deletePlayer(index: number) {
    this.data.deletePlayer(index);
  }
  ngOnInit(): void {
  }

}
