import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MapService } from './../services/map.service';
import {Point} from './../point';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editpoint',
  templateUrl: './editpoint.component.html',
  styleUrls: ['./editpoint.component.css']
})
export class EditpointComponent implements OnInit {
  @Input('point') point: Point;
  @ViewChild('editedPointForm') pointForm: NgForm;
  lat: number;
  lng: number;
  success: boolean;

  constructor(private router: Router, private mapService: MapService) { }

  ngOnInit() {
    this.point=this.mapService.getPointToEdit();
    if(this.point) {
      let insert = {name:this.point.name,
        owner:this.point.owner,
        latitude:this.point.latitude,
        longitude:this.point.longitude,
        description:this.point.description,
        hint:this.point.hint,
        userslist:this.point.userslist
      }
      this.lat = this.point.latitude;
      this.lng = this.point.longitude;
      setTimeout(()=> {
        this.pointForm.setValue(insert)
      },50);
    } else {
      console.log("noting to edit ! - redirected to add point");
      this.router.navigate(['/addpoint']);
    }
  }
  
  onPointSubmit(data): void {
    data.id=this.point.id;
    this.mapService.editPoint(data).subscribe(
      res => {
        console.log('Done');
        this.success=true;
        setTimeout(()=>this.success=false,1000);
      }
    );
    this.lat = data.latitude;
    this.lng = data.longitude;
  }

}
