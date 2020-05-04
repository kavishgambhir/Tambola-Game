import { Ticket } from './ticket.model';

export class Player {
    tickets: Ticket[];
    currentTicketId: number;

    playerName: string;
    constructor(playerName: string="") {
        this.tickets = [];
        this.playerName = playerName;
        this.currentTicketId=1;
        this.createTicket();
    }

    createTicket() {
        this.tickets.push(new Ticket(this.playerName, this.currentTicketId));
        this.currentTicketId += 1;
    }
    deleteTicket(index: number) {
        this.tickets.splice(index, 1);
    }
}
