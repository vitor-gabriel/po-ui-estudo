import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SqlEditorComponent } from './sql-editor.component';
import { EditAreaComponent } from './components/edit-area/edit-area.component';
import { PoModule } from '@po-ui/ng-components';
import { FormsModule } from '@angular/forms';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { ResultComponent } from './components/result-table/result-table.component';
import { HttpGenericsService } from '../core/services/httpgenerics.service';

const routes: Routes = [
  {
    path: '',
    component: SqlEditorComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    SqlEditorComponent,
    EditAreaComponent,
    ResultComponent
  ],
  imports: [
    PoModule,
    PoTemplatesModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  providers: [HttpGenericsService]
})
export class SqlEditorModule { }
