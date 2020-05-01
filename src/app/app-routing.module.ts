import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketComponent } from './ticket/ticket.component';
import { NumberGridComponent } from './number-grid/number-grid.component';
import { TicketManagerComponent } from './ticket-manager/ticket-manager.component';


const routes: Routes = [
  { path: 'ticket-manager-component', component: TicketManagerComponent },
  { path: 'number-gen-component', component: NumberGridComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
