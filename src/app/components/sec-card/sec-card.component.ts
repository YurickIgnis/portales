import { Component, Input } from '@angular/core';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-sec-card',
  templateUrl: './sec-card.component.html',
  styleUrls: ['./sec-card.component.scss']
})
export class SecCardComponent {

  @Input()
  text!: string;
  @Input()
  iconPrex!: IconPrefix;
  @Input()
  icon!: IconName;
  @Input()
  link!: string;

  
}
