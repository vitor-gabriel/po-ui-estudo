import { Component } from '@angular/core';
import { HttpGenericsService } from '../core/services/httpgenerics.service';
import { PoNotificationService } from '@po-ui/ng-components';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  isLoading: boolean = false;
  background: string = "./assets/images/login-background.png"

  constructor(private httpGenericsService: HttpGenericsService, private poNotification: PoNotificationService, private route: Router) { }

  checkLogin(formData: any) {

    this.isLoading = true;
    this.httpGenericsService.login(formData).subscribe({
      next: (formData: any) => {
        setTimeout(() => {
          sessionStorage.setItem('token', formData.token);
          this.isLoading = false;
          this.poNotification.success('Logged successfully!');
          this.route.navigate(['index.html/sqleditor']);
        }, 500);
      },
      error: (err: any) => {
        this.isLoading = false;
      }
    });
    this.isLoading = false;
  }
}
