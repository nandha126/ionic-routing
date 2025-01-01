import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from '../places.model';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
  standalone: false
})
export class OffersPage implements OnInit {
  loadedOffers!: Place[];

  constructor(private placeService: PlacesService) { }

  ngOnInit() {
    this.loadedOffers = this.placeService.places;
  }

}
