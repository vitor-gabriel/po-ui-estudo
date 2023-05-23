import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Buffer } from 'buffer';
import { Injectable } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpGenericsService {

  authBasic: string = '';

  constructor(private http: HttpClient) { }

  login(formData: any): Observable<any> {
    this.authBasic = Buffer.from(formData.login + ":" + formData.password, 'ascii').toString('base64');
    const headers = new HttpHeaders().set('Authorization', 'Basic ' + this.authBasic);
    return this.http.post<any>(environment.baseURL + '/api/v1/login', { rememberUser: formData.rememberUser }, { headers });
  }

  getResult(consultText: string): Observable<{ columns: PoTableColumn[], items: any[] }> {
    const params = new HttpParams().set('query', consultText || '');
    const headers = new HttpHeaders().set('Authorization', sessionStorage.getItem('token') || '');
    return this.http.get<{ columns: PoTableColumn[], items: any[] }>(environment.baseURL + '/api/v1/execute', { headers: headers, params: params });
  }

}
