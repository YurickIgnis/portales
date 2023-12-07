import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomModalComponent } from 'src/app/components/custom-modal/custom-modal.component';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent {

  @Input() text!: string;
  @Input() iconPrex!: IconPrefix;
  @Input() icon!: IconName;
  @Input() link!: string;
  @Output() openModal = new EventEmitter<string>();

  constructor(private modalService: NgbModal) {}
  
  openVerticallyCentered() {
    this.openModal.emit(this.text);
  }
}
