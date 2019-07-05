import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Place } from '../../model/place';
import { LieuxService } from '../../service/lieux.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})

export class ListPage implements OnInit {
  private places: Array<Place>;

  constructor(public alertController: AlertController, private lieux: LieuxService) {
    this.places = [
      {
        id : 1,
        nom : 'Nantes',
        description : 'Ville dans le nord-ouest de la France',
        GPS : '47° 13\' 6.136" N 1° 33\' 13.036" W',
        image : 'https://www.presseocean.fr/sites/presseocean.fr/files/imagecache/detail/2017/08/31/561b8658-495200.jpg',
        note : 3,
        categorie : 'Immeuble',
        date : '01/07/2019',
      },
      {
        id : 2,
        nom : 'Brest',
        description : 'Ville maritime',
        GPS : ' 48° 23\' 25.418" N 4° 29\' 9.874" W',
        image : 'http://www.diazmag.com/wp-content/uploads/2015/09/urbex-27.jpg',
        note : 2,
        categorie : 'Bâtiment',
        date : '01/07/2019',
      },
      {
        id : 3,
        nom : 'Saint-Pétersbourg',
        description : 'Ville culturelle russe',
        GPS : '59° 56\' 3.408" N 30° 20\' 6.356" E',
        image : 'http://referentiel.nouvelobs.com/file/14220418-grand-format-urbex-il-fait-un-tour-d-europe-des-lieux-abandonnes.jpg',
        note : 4,
        categorie : 'Usine',
        date : '01/07/2019',
      }

    ];
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      message: 'Cette fonctionnalité n\'est pas encore disponible',
      buttons: ['OK']
    });

    await alert.present();
  }

  ngOnInit() {
  }

}
