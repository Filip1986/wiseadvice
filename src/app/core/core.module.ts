// core
import {
  NgModule,
  Optional,
  SkipSelf
} from '@angular/core';

import {
  XHRBackend,
  RequestOptions
} from '@angular/http';

import {Router} from '@angular/router';

// services
import {TranslateService} from '@ngx-translate/core';
import {LanguageService} from './language-service';
import {CustomHttp} from './custom-http.service';
import {ErrorMessageService} from './error-message.service';


export function CustomHttpFactory(backend: XHRBackend,
                                  defaultOptions: RequestOptions,
                                  router: Router,
                                  langServ: LanguageService,
                                  errorMessageService: ErrorMessageService) {
  return new CustomHttp(backend, defaultOptions, router, langServ, errorMessageService);
}

@NgModule({
  imports: [],
  declarations: [],
  exports: [],
  providers: [
    ErrorMessageService,
    LanguageService,
    TranslateService,
    {
      provide: CustomHttp,
      useFactory: CustomHttpFactory,
      deps: [XHRBackend, RequestOptions, Router, LanguageService]
    }
  ],
  entryComponents: []
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
