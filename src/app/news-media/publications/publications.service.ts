import { Injectable } from '@angular/core';
import { publications_interface } from './publication_Modal';

@Injectable({
  providedIn: 'root'
})
export class PublicationsService {

  constructor() { }
  List_of_journal: publications_interface[]=[{
    
      articlelink: "https://journals.lww.com/prsgo/Fulltext/2018/08001/Abstract___Replacement_of_Contracted.135.aspx",
      title:"Plastic and Reconstructive Surgery - Global Open",
      src:"./assets/publications-assets/prs.image.jpg",
      date:"August 1",
      description: 'Replacement of Contracted Split-Thickness Skin Graft and Keloid Scar with a Self-Propagating Autologous Skin Construct (SkinTE™) Plastic and Reconstructive Surgery – Global Open.doi: 10.1097/01.GOX.0000546946.49208.b3',
      author:'Mundinger, Gerhard S., MD; Patterson, Charles W., MD'
      ,
     
     },
  ]
}

