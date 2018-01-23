// core
import {Injectable} from '@angular/core';

// services
import {CustomHttp} from '../core/custom-http.service';

@Injectable()
export class ServicesService {
  private baseUrl: string;

  constructor(private http: CustomHttp) {
    this.baseUrl = 'api/';
  }

  getContact(path) {
    return this.http.get(`${this.baseUrl}` + path).map(res => {
      return res.json();
    });
  }

}
