import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NumberGridComponent } from './number-grid/number-grid.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TicketComponent } from './ticket/ticket.component';
import { PlayerDashboardComponent } from './player-dashboard/player-dashboard.component';
import { PlayerComponent } from './player/player.component';

@NgModule({
  declarations: [
    AppComponent,
    NumberGridComponent,
    TicketComponent,
    PlayerDashboardComponent,
    PlayerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
