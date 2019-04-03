import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarMenuService {
  DataSrc:any = []

  constructor() { }

  getDataSrc(data){
    this.DataSrc = data
  }

}
