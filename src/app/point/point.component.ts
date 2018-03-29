import { Component, OnInit, Input } from '@angular/core';
import {Point} from './../point';
import { MapService } from './../services/map.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-point',
  templateUrl: './point.component.html',
  styleUrls: ['./point.component.css']
})
export class PointComponent implements OnInit {
  @Input('point') point: Point;
  constructor(private mapService: MapService,
              private router: Router) {}
  
  ngOnInit() {
  }

  deletePoint(id) {
    this.mapService.deletePoint(id).subscribe(
      res => console.log('Deleted')
    );
    location.reload();
  }

  editPoint(point) {
    this.mapService.setPointToEdit(point);
    this.router.navigate(['/editpoint']);
  }
}
