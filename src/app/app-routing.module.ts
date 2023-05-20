import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'index.html',
    pathMatch: 'full'
  },
  {
    path: 'index.html',
    loadChildren: () => import('./sql-editor/sql-editor.module')
      .then(m => m.SqlEditorModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
