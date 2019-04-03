import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactserviceService {
  data;
  constructor() { }
  getFromService(data){
    this.data=data;
 }
}
