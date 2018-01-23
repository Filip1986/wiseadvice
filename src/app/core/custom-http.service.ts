// core
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import {
  Http,
  RequestOptions,
  RequestOptionsArgs,
  Response,
  Headers,
  XHRBackend
} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Cookie } from 'ng2-cookies/ng2-cookies';

// srevices
import { ErrorMessageService } from './error-message.service';
import { LanguageService } from './language-service';


@Injectable()
export class CustomHttp extends Http {

  constructor(
    backend: XHRBackend,
    defaultOptions: RequestOptions,
    private router: Router,
    private languageService: LanguageService,
    private errorMessageService: ErrorMessageService
  ) {
    super(backend, defaultOptions);
  }

  /**
   * Performs a request with `get` http method.
   * @param url
   * @param options
   * @returns {Observable<>}
   */
  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    this.beforeRequest();
    return super.get(this.getFullUrl(url), this.requestOptions(options))
      .catch((error: any, caught: Observable<any>) => {
        return this.onCatch(error, caught);
      })
      .do(
        (res: Response) => { this.onSuccess(res); },
        (error) => { this.onError(error); }
      )
      .finally(() => { this.onFinally(); });
  }

  /**
   * Performs a request with `post` http method.
   * @param url
   * @param body
   * @param options
   * @returns {Observable<>}
   */
  post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    this.beforeRequest();
    return super.post(this.getFullUrl(url), body, this.requestOptions(options))
      .catch((error: any, caught: Observable<any>) => {
        return this.onCatch(error, caught);
      })
      .do(
        (res: Response) => { this.onSuccess(res); },
        (error) => { this.onError(error); }
      )
      .finally(() => { this.onFinally(); });
  }

  /**
   * Performs a request with `put` http method.
   * @param url
   * @param body
   * @param options
   * @returns {Observable<>}
   */
  put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    this.beforeRequest();
    return super.put(this.getFullUrl(url), body, this.requestOptions(options))
      .catch((error: any, caught: Observable<any>) => {
        return this.onCatch(error, caught);
      })
      .do(
        (res: Response) => { this.onSuccess(res); },
        (error) => { this.onError(error); }
      )
      .finally(() => { this.onFinally(); });
  }

  /**
   * Performs a request with `delete` http method.
   * @param url
   * @param body
   * @param options
   * @returns {Observable<>}
   */
  delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    this.beforeRequest();
    return super.delete(this.getFullUrl(url), this.requestOptions(options))
      .catch((error: any, caught: Observable<any>) => {
        return this.onCatch(error, caught);
      })
      .do(
        (res: Response) => { this.onSuccess(res); },
        (error) => { this.onError(error); }
      )
      .finally(() => { this.onFinally(); });
  }

  /**
   * Request options.
   * @param options
   * @returns {RequestOptionsArgs}
   */
  private requestOptions(options?: RequestOptionsArgs): RequestOptionsArgs {
    if (options == null) {
      options = new RequestOptions();
    }

    if (options.headers == null) {
      if (Cookie.get('access_token') != null) {
        options.headers = new Headers({
          'Accept-Language': this.languageService.getCurrentLanguage(),
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        });
      } else {
        options.headers = new Headers({
          'Accept-Language': this.languageService.getCurrentLanguage(),
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        });
      }
    } else {
      options.headers['Accept-Language'] = this.languageService.getCurrentLanguage();
    }

    return options;
  }

  /**
   * Build API url.
   * @param url
   * @returns {string}
   */
  private getFullUrl(url: string): string {
    return url;
  }

  private beforeRequest(): void { }

  private afterRequest(): void { }

  /**
   * Error handler.
   * @param error
   * @param caught
   * @returns {ErrorObservable}
   */
  private onCatch(error: any, caught: Observable<any>): Observable<any> {
    /* Place error interceptor logic here */
    if (error.status === 401) {
      console.log('401');
    } else {
      return Observable.throw(error);
    }

  }

  private getAuthDetails() {
    return super.get('/api/authorize/details')
      .map(res => res.json());
  }

  private onSuccess(res: Response): void { }

  private onError(error: any): void {
    const err = error.json();
    if (err && err.message) {
      this.errorMessageService.showErrorMessage(err.message);
    }
  }

  private onFinally(): void { this.afterRequest(); }
}
