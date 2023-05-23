import { Component } from '@angular/core';
import { PoPageLoginAuthenticationType } from '@po-ui/ng-templates';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  basic: PoPageLoginAuthenticationType = PoPageLoginAuthenticationType.Basic;
  loginURL: string = environment.baseURL + 'login';
  teste: boolean = true;

  constructor() { }

}
