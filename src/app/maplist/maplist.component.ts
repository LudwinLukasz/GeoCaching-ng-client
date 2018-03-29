import { Component, OnInit } from '@angular/core';
import { MapService } from './../services/map.service';
import {Point} from './../point';
// import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-maplist',
  templateUrl: './maplist.component.html',
  styleUrls: ['./maplist.component.css']
})
export class MaplistComponent implements OnInit {
  points: Array<Point>;
  error: string;

  constructor(private mapService: MapService) { }

  ngOnInit() {
    this.mapService.getAllPoints().subscribe(
     data => this.points = data,
      error => this.error = error.statusText
    );
  }

}
