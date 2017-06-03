import { Component, OnInit } from '@angular/core';
import { SeatService } from "../../services/service.seats";
import { Seat } from "../../models/Seat";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SeatService]
})
export class AppComponent implements OnInit {
  title = 'Choose Your Seats';

  seats: Seat[];
  totalSelectedSeats: number = 0;
  constructor(private SeatService: SeatService) {
  }

  getSeats(): void {
    this.SeatService.getSeats().then(seats => this.seats = seats)
  }

  ngOnInit(): void {
    this.getSeats();
    console.log(this.seats);
  }

  checkAvailability(seat: Seat) {

    if (seat.available) {
      this.totalSelectedSeats = this.totalSelectedSeats + 1;
      seat.available = false;
      seat["isEdited"] = true;
      return;
    }

    if (!seat.available && seat["isEdited"]) {
      this.totalSelectedSeats = this.totalSelectedSeats - 1;
      seat.available = true;
      seat["isEdited"] = false;
    }
    console.log(seat);
  }
}
