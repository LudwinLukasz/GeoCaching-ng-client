import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MapService } from './../services/map.service';
import {Point} from './../point';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addpoint',
  templateUrl: './addpoint.component.html',
  styleUrls: ['./addpoint.component.css']
})
export class AddpointComponent implements OnInit {
  @Input('point') point: Point;
  @ViewChild('newPointForm') pointForm: NgForm;
  lat: number;
  lng: number;
  success: boolean;
  constructor(private mapService: MapService) { }

  ngOnInit() {
  }

  onPointSubmit(data): void {
    this.mapService.addPoint(data).subscribe(
      res => {
        console.log('Done');
        this.success=true;
        setTimeout(()=>this.success=false,1000);
      }
    );
    this.pointForm.reset();
    this.lat = data.latitude;
    this.lng = data.longitude;
  }
}
