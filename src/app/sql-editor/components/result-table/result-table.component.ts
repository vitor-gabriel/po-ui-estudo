import { Component, Input } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'app-result',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.css']
})
export class ResultComponent {

  constructor() { }
  @Input() columns: Array<PoTableColumn> = [];
  @Input() items: Array<any> = [];

}





