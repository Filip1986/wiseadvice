// core
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

// services
import { ServicesService } from '../services/services.service';

@Injectable()
export class Resolvers implements Resolve<any> {

  constructor(private services: ServicesService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.services.getContact(route.url[0].path);
  }
}
