import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.scss']
})
export class CustomModalComponent {
  @Input() modalTitle: string = 'Título predeterminado';
  @Input() modalText: string = 'Texto predeterminado';
  @Input() modalLink: string = '';

  constructor(public activeModal: NgbActiveModal) {}

  navigateToLink(link: string) {
    window.open(link, "_blank");
  }
}
