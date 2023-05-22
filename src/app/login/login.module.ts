import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoModule } from '@po-ui/ng-components';
import { LoginComponent } from './login.component';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    PoModule,
    PoTemplatesModule,
    RouterModule.forChild(routes),
  ]
})
export class LoginModule { }
