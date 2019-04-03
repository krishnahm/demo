import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import postscribe from 'postscribe';
import { Title, Meta } from '@angular/platform-browser';
import { ContactserviceService } from '../contact/contactservice.service';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit{
  currentJobs = [];
  @Output() sendvalue = new EventEmitter;
  constructor(private titleService: Title, private meta: Meta, private cs:ContactserviceService) {
  
    this.meta.updateTag(
      { property: 'og:title', content: 'Careers :: PolarityTE, Inc.(PTE)' }

    );

    this.meta.updateTag(
      { property: 'og:url', content: 'https://www.polarityte.com/careers' }
    );
    this.meta.updateTag(
      { name: 'description', content: 'To achieve PolarityTE’s goal, PolarityTE recognizes that success begins with the vitality and talents of the employees, individually and collectively, who work at PolarityTE. We are always looking for talented professionals to join our team.' }

    );
    this.meta.updateTag(
      { name: 'keywords', content: 'Careers, PolarityTE, Inc.(PTE)' }
    );
    this.meta.updateTag(
      { property: 'og:description', content: 'To achieve PolarityTE’s goal, PolarityTE recognizes that success begins with the vitality and talents of the employees, individually and collectively, who work at PolarityTE. We are always looking for talented professionals to join our team.' }

    );
   }

  ngAfterViewInit() {
    postscribe('#BambooHR', '<script src="https://polarityte.bamboohr.com/js/jobs2.php"><\/script>');
  }
  ngOnInit() {
    this.titleService.setTitle( 'Careers :: PolarityTE, Inc.(PTE)' )
      }
      goToContact(data){
 
        if(data=="contact"){
          this.cs.getFromService('contact')
          this.sendvalue.emit('contact')
        }
      }

}