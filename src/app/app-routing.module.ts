import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketComponent } from './ticket/ticket.component';
import { NumberGridComponent } from './number-grid/number-grid.component';
import { PlayerDashboardComponent } from './player-dashboard/player-dashboard.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: "/number-gen-component",
    pathMatch: 'full'
  },
  {
    path: 'ticket', component:TicketComponent
  },
  { path: 'ticket-manager-component', component: PlayerDashboardComponent },
  { path: 'number-gen-component', component: NumberGridComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
