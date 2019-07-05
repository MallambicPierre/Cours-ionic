import { Component } from '@angular/core';
import {Place} from '../../model/place';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  private places: Array<Place>;

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  constructor() {
    this.places = [
      {
        id : 1,
        nom : 'Nantes',
        description : 'Ville dans le nord-ouest de la France',
        GPS : '47° 13\' 6.136" N 1° 33\' 13.036" W',
        image : 'https://img.20mn.fr/YYtC0x7mTeG2CajCEjK6kw/310x190_objectif-ultra-grand-angle-privilegier-photo-urbex.jpg',
        note : 3,
        categorie : 'Ville',
        date : '01/07/2019',
      },
      {
        id : 2,
        nom : 'Brest',
        description : 'Ville maritime',
        GPS : ' 48° 23\' 25.418" N 4° 29\' 9.874" W',
        image : 'https://creacours.com/blog/wp-content/uploads/2017/02/2017-02-14-creacours-1200x630-1140x630.jpg',
        note : 2,
        categorie : 'Ville',
        date : '01/07/2019',
      },
      {
        id : 3,
        nom : 'Saint-Pétersbourg',
        description : 'Ville culturelle russe',
        GPS : '59° 56\' 3.408" N 30° 20\' 6.356" E',
        image : 'http://www.linflux.com/wp-content/uploads/2017/10/lee-aik-soon-39274-iloveimg-resized-1200x800.jpg',
        note : 4,
        categorie : 'Ville',
        date : '01/07/2019',
      }

    ];
  }


}
