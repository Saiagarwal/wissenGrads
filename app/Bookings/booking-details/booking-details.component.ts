import { Component ,OnInit } from '@angular/core';
import { DetailsService } from 'src/app/details.service';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent {

  constructor(private service : DetailsService) {}

  bookingStatus! : string;
  to! : string;
  destination! : string;

  bookingObj = {
    to : this.to,
    destination : this.destination
  }
  hii(){

    this.service.book(this.bookingObj).subscribe({
      next : (data : string) => this.bookingStatus = data,
      error : (err) => console.log(err)
    })
    console.log(this.bookingStatus);
    alert("kuch kaam mujhe bhi bta dia kro....");
  }

}
