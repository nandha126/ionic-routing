import { Injectable } from '@angular/core';
import { Place } from './places.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    {
      id: 'p1',
      title: 'Manhattan Mansion',
      description: 'In the heart of New York City.',
      imageUrl: 'https://picsum.photos/372/372',
      price: 150
    },
    {
      id: 'p2',
      title: 'L\'Amour Toujours',
      description: 'A romantic place in Paris!',
      imageUrl: 'https://picsum.photos/372/372',
      price: 200
    },
    {
      id: 'p3',
      title: 'The Foggy Palace',
      description: 'Not your average city trip!',
      imageUrl: 'https://picsum.photos/372/372',
      price: 250
    }
  ];

  get places() {
    return [...this._places];
  }

  getPlace(id: string) {
    return {...this._places.find(p => p.id === id)};
  }

  constructor() { }
  
}
