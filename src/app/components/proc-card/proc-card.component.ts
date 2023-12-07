import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-proc-card',
  templateUrl: './proc-card.component.html',
  styleUrls: ['./proc-card.component.scss']
})
export class ProcCardComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() text: string = '';
  @Input() list_chips: string[] = [];
  @Input() text_btn: string = '';
  @Input() homoclave: string = '';

  
}
