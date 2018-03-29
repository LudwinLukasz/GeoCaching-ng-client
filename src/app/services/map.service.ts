import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import {Point} from './../point';

@Injectable()
export class MapService {
 
  pointToEdit: Point;

  constructor(private http: Http) { }

  getPointToEdit() {
    return this.pointToEdit;
  }

  setPointToEdit(point) {
    this.pointToEdit=point;
  }

  getAllPoints() {
    return this.http.get('api/points')
    .map(res => res.json())
  }

  addPoint(data) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('api/point',data, options);
  }

  deletePoint(id) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.delete('api/point/'+id, options);
  }

  editPoint(point) {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      return this.http.put('api/point/'+point.id,point, options);    
  }

}
