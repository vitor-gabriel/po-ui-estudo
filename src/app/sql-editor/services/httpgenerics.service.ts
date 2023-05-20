import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpGenericsService {
  constructor(private http: HttpClient) { }

  getResult(): Observable<{ columns: PoTableColumn[], items: any[] }> {
    return this.http.get<{ columns: PoTableColumn[], items: any[] }>('http://localhost:3000/resultsql');
  }

}
