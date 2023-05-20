import { Component } from '@angular/core';
import { HttpGenericsService } from './services/httpgenerics.service';
import { PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'app-sql-editor',
  templateUrl: './sql-editor.component.html',
  styleUrls: ['./sql-editor.component.css']
})
export class SqlEditorComponent {

  constructor(private httpGenericsService: HttpGenericsService) { }

  consultText: string = '';
  columns: Array<PoTableColumn> = [];
  items: Array<any> = [];

  onTextChanged(texto: string) {
    this.consultText = texto;
  }

  getPageAction() {
    const isDisabled = this.consultText ? !this.consultText : true;
    return [
      { label: 'Execute', action: this.send.bind(this), disabled: isDisabled },
      { label: 'Clean', action: this.reset.bind(this) }
    ];
  }

  reset() {
    this.consultText = '';
  }

  send() {
    this.httpGenericsService.getResult().subscribe({
      next: ({ columns, items }: { columns: PoTableColumn[], items: any[] }) => {
        this.columns = columns;
        this.items = items;
        // Coloque aqui a lógica adicional que você deseja executar após receber as colunas e os itens
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }
}
