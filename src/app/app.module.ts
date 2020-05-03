import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NumberGridComponent } from './number-grid/number-grid.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TicketComponent } from './ticket/ticket.component';
import { TicketManagerComponent } from './ticket-manager/ticket-manager.component';
import { PlayerComponent } from './player/player.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NumberGridComponent,
    TicketComponent,
    TicketManagerComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    StoreModule.forRoot(reducers, {
       
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
