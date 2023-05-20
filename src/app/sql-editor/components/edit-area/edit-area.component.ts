import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-edit-area',
  templateUrl: './edit-area.component.html',
  styleUrls: ['./edit-area.component.css']
})
export class EditAreaComponent {
  @Input() consultText: string = '';
  @Output() textChange = new EventEmitter<string>();

  onTextChange() {
    this.textChange.emit(this.consultText);
  }
}
