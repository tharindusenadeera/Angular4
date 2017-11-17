import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {
  private url: string = 'http://127.0.0.1:3000/users/get/';
  constructor(private http: Http) { }
  login(post): Observable<any> {

    console.log(post);
    const getLoginUrl = this.url + 'get/login/' + post['username'] + '/' + post['password'];
    return this.http
      .get(getLoginUrl, {})
      .map(
      res => {
        if (res.json().status == true) {
          localStorage.setItem('currentUser', JSON.stringify(res.json().data));
        }
        return res.json();
      },
      err => {
        return err;
      }
      )
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
/*   getItem(): Observable<any> {
    const getItemUrl = this.url + 'get/item/list';
    return this.http
      .get(getItemUrl, {})
      .map(
      res => {
        return res.json();
      },
      err => {
        return err;
      }
      )
  } */
}