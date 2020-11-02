import { Injectable } from '@angular/core';
import { LoginInfo } from './login-model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class LoginService {


  constructor(private loginInfo: LoginInfo, private http: HttpClient) {
    // this.getJSON().subscribe(data => {
    //   console.log(data);
    // });
  }

  public getJSON(): Observable<LoginInfo> {
    return this.http.get<LoginInfo>("https://api.mocki.io/v1/a7db8738");
  }


}
