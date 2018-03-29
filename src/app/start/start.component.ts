import { Component, OnInit } from '@angular/core';
import { MapService } from './../services/map.service';
import {Point} from './../point';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  lat: number;
  lng: number;
  zoom: number=8;
  points: Array<Point>;
  error: string;

  constructor(private mapService: MapService) {}

  ngOnInit() {
    this.mapService.getAllPoints().subscribe(
      data => {this.points = data,
        this.lat = this.points.map((p)=>p.latitude).reduce((prev,curr)=> prev+curr)/this.points.length;
        this.lng= this.points.map((p)=>p.longitude).reduce((prev,curr)=> prev+curr)/this.points.length;
        
        let sortedLat = this.points.map((p)=> p.latitude).sort((a,b)=>a-b);
        let sortedLng = this.points.map((p)=> p.longitude).sort((a,b)=>a-b);
        let spanlat = sortedLat[sortedLat.length-1]-sortedLat[0];
        let spanlng = sortedLng[sortedLng.length-1]-sortedLng[0];
        let span = spanlat > spanlng ? spanlat : spanlng;
        
        if (span < 0.05) {
          this.zoom = 15;
        } else if (span < 0.1) {
          this.zoom=10;
        } else if(span < 5) {
          this.zoom = 6;
        } else {
          this.zoom= 2;
        }
      },
      error => this.error = error.statusText
    );
  }
}