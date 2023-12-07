import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-circle-info',
  templateUrl: './circle-info.component.html',
  styleUrls: ['./circle-info.component.scss']
})
export class CircleInfoComponent {
  @Input()
  title!: string;
  @Input()
  data!: string;

  constructor() { }

  ngOnInit(): void {
  }
}
