import { Injectable } from '@angular/core';
import {Http, RequestOptions} from '@angular/http';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  headers() {
    const headers = new Headers();
    return  new RequestOptions(headers);
  }

  get(url, options = this.headers()) {
    return this.http.get(url, options);
  }

  post() {

  }

}
