import { Component, OnInit } from '@angular/core';
import { Place } from '../../places.model';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
  standalone: false
})
export class OfferBookingsPage implements OnInit {
  place: Place | any;

  constructor(private route: ActivatedRoute, private navCtrl:NavController, private placeService: PlacesService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap => { 
      if (!paramMap.has('placeId')) {
        this.navCtrl.navigateBack('/places/tabs/offers');
        return;
      }
      const placeId = paramMap.get('placeId');
      if (placeId) {
        console.log(placeId)
        this.place = this.placeService.getPlace(placeId);
      }
    }
    ));
  }

}
