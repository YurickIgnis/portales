import { Component, EventEmitter, Output } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { LocalDep } from 'src/app/services/interfaces/dep.local.api.interface';

@Component({
  selector: 'app-dep-list',
  templateUrl: './dep-list.component.html',
  styleUrls: ['./dep-list.component.scss']
})
export class DepListComponent {

  localApi: LocalDep[] = [];

  @Output() depEvent = new EventEmitter<string>();

  constructor(private api: ApiService) {
    
  }

}
