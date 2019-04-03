import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockdataService {
  private URL = 'https://www.b2i.us/b2i/quote3.asp?b=2361&d=0&dl=2&o=1&s=PTE';
  
  constructor(private http: Http) { }
  getStockData(){
    return this.http.get(this.URL).map(response => response.json())
    
  }
}
