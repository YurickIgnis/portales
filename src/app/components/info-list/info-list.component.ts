import { Component, Input } from '@angular/core';
import { PublicAPI } from 'src/app/services/interfaces/public.api.interfaces';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomModalComponent } from 'src/app/components/custom-modal/custom-modal.component';

@Component({
  selector: 'app-info-list',
  templateUrl: './info-list.component.html',
  styleUrls: ['./info-list.component.scss']
})
export class InfoListComponent {

  @Input() pubApi!: PublicAPI;

  constructor(private modalService: NgbModal) {}

  openVerticallyCentered(text: string) {
    const info = this.pubApi.publicApi.infografia.find((item) => item.text === text);
    if (info) {
      const modalRef = this.modalService.open(CustomModalComponent, { centered: true , size: 'lg'});
      modalRef.componentInstance.modalTitle = info.text;
      modalRef.componentInstance.modalText = info.modalText;
      modalRef.componentInstance.modalLink = info.link;
    }
  }
}
