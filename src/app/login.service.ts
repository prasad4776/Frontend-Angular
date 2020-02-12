import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppConst } from '../../../../utils/app_utils';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

 
  constructor(private http: HttpClient) { }
  login(data: any): Observable<any> {
    return this.http.post(AppConst.Login, data);
  }

}
