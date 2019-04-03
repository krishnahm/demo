import { Component, OnInit, Inject, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { DOCUMENT, Title, Meta } from '@angular/platform-browser';
import { PageScrollConfig } from 'ngx-page-scroll';
import { ContactserviceService } from './contactservice.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  formSubmit: boolean = false;
  datanew;
  classfeedback;
   classcollaborate;
   classinvestor;
  classcontactHR;
  constructor(private router: Router, @Inject(DOCUMENT) private document: any, private renderer: Renderer2,private cs:ContactserviceService, private titleService: Title, private meta: Meta) {

    this.meta.updateTag(
      { property: 'og:title', content: 'Contact :: PolarityTE, Inc.(PTE)' }

    );

    this.meta.updateTag(
      { property: 'og:url', content: 'https://www.polarityte.com/contact' }
    );
    this.meta.updateTag(
      { name: 'description', content: 'Headquarters: 123 North Wright Brothers Drive, Salt Lake City, UT 84116' }

    );
    this.meta.updateTag(
      { name: 'keywords', content: 'Contact HR, Feedback/Ask Questions Form, Collaborate Form, Become an Investor' }
    );
    this.meta.updateTag(
      { property: 'og:description', content: 'Headquarters: 123 North Wright Brothers Drive, Salt Lake City, UT 84116' }

    );
  }

  ngOnInit() {
    PageScrollConfig.defaultScrollOffset = 70;
    this.titleService.setTitle('Contact :: PolarityTE, Inc.(PTE)');
    let script = this.renderer.createElement('script');
    script.type = `text/javascript`;
    script.language = "JavaScript";
    script.text = `
        {
          oEmail.BizID = "2361";
          oEmail.sKey = "C4B8g6V4p5";
          oEmail.sHttp = "https";
          getEmailAlertData();
        }
    `;
    this.renderer.appendChild(this.document.head, script);
    this.classfeedback='active';
    if(this.cs.data == 'feedback'){
      this.classfeedback='active';
      this.classcollaborate='';
      this.classinvestor='';
      this.classcontactHR='';
    }
     if(this.cs.data == 'collaborate'){
      this.classcollaborate='active';
      this.classfeedback='';
      this.classinvestor='';
      this.classcontactHR='';

    }
     if(this.cs.data == 'investor'){
      this.classinvestor='active';
      this.classfeedback='';
      this.classcollaborate='';
      this.classcontactHR='';

    }
     if(this.cs.data == 'contact'){
      this.classcontactHR='active';
      this.classfeedback='';
      this.classcollaborate='';
      this.classinvestor='';
    }

  }

  getvalue(data){
    if(data == 'feedback'){
      this.classfeedback='active';
      this.classcollaborate='';
      this.classinvestor='';
      this.classcontactHR='';
    }
     if(data == 'collaborate'){
      this.classcollaborate='active';
      this.classfeedback='';
      this.classinvestor='';
      this.classcontactHR='';

    }
     if(data == 'investor'){
      this.classinvestor='active';
      this.classfeedback='';
      this.classcollaborate='';
      this.classcontactHR='';

    }
     if(data == 'contact'){
      this.classcontactHR='active';
      this.classfeedback='';
      this.classcollaborate='';
      this.classinvestor='';

    }
  }
}