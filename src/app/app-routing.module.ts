import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth-guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'index.html/sqleditor',
    pathMatch: 'full'
  },
  {
    path: 'index.html/login',
    loadChildren: () => import('./login/login.module')
      .then(m => m.LoginModule)
  },
  {
    path: 'index.html/sqleditor',
    canActivate: [AuthGuard],
    loadChildren: () => import('./sql-editor/sql-editor.module')
      .then(m => m.SqlEditorModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
