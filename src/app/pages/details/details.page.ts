import {Component, OnInit} from '@angular/core';
import { Place } from '../../model/place';
import { ActivatedRoute} from '@angular/router';
import { LieuxService } from '../../service/lieux.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  private lieux: LieuxService;
  private places: Array<Place>;
  private place: Place;

  // constructor données statiques
  constructor(private route: ActivatedRoute) {


  }

  // ngOnInit données non statiques
  ngOnInit() {
    let id = this.route.snapshot.params['id'];


  }

.
}
