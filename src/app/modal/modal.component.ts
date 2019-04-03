import { Component, ElementRef, OnInit, OnDestroy, Input, Inject } from '@angular/core';
import { ModalService } from '../shared';
import { DOCUMENT } from '@angular/common';
@Component({
    selector: 'jw-modal',
    template: `
  
  <div class="modal-overlay">
  <div class="jw-modal">
  <div class="jw-modal-body">
      <ng-content></ng-content>
  </div>
</div>
</div>
`,
    styles: [`
.modal-overlay {
    width: 100vw;
    width: calc(100vw - (100vw - 100%));
    height: 100vh;
    top: 0;
    left: 0;
    display: flex;
    z-index: 9999;
    position: fixed;
    overflow: hidden;
    background: rgba(0,0,0,0.4);
}
 .jw-modal {
    z-index: 9998;
    background-color: #000;
    border-radius: 0;
    visibility: visible;
    max-width: 1024px;
    margin: auto;
    max-height: 98%;
    min-height: 48%;
    width: 100%;
    overflow: auto;
}
.jw-modal-body p{
    color:#fff !important;
}
.jw-modal-body {
    background: #000;
    margin: 40px;
}

.jw-modal-open {
    overflow: hidden;
}

`]
})
export class ModalComponent implements OnInit, OnDestroy {
    @Input() id: string;
    private element: any;

    constructor(private modalService: ModalService, private el: ElementRef ,@Inject(DOCUMENT) private document: any) {
        this.element = el.nativeElement;
    }

    ngOnInit(): void {
        let modal = this;

        // ensure id attribute exists
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }

        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        this.document.body.appendChild(this.element);

        // close modal on background click
        this.element.addEventListener('click', function (e: any) {
            if (e.target.className === 'jw-modal') {
                modal.close();
            }
        });

        // add self (this modal instance) to the modal service so it's accessible from controllers
        this.modalService.add(this);
    }

    // remove self from modal service when directive is destroyed
    ngOnDestroy(): void {
        this.modalService.remove(this.id);
    }

    // open modal
    open(): void {
        this.element.style.display = 'block';
        this.document.body.classList.add('jw-modal-open');
    }

    // close modal
    close(): void {
        this.element.style.display = 'none';
        this.document.body.classList.remove('jw-modal-open');
    }
}
