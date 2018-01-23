// core
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateService, TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {CoreModule} from './core/core.module';
import {AppRoutingModule} from './app-routing.module';

// services
import {CustomHttp} from './core/custom-http.service';
import {LanguageService} from './core/language-service';
import {ServicesService} from './services/services.service';

// components
import {AppComponent} from './app.component';
import {ListsComponent} from './lists/lists.component';

// resovlers
import {Resolvers} from './resolvers/resolvers';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    ListsComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    HttpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    /**
     * @description AppRoutingModule should always be imported last
     * @example https://angular.io/guide/router#module-import-order-matters
     * @tutorial https://angular.io/guide/router#module-import-order-matters
     */
    AppRoutingModule,
  ],
  providers: [
    CustomHttp,
    LanguageService,
    Resolvers,
    ServicesService,
    TranslateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
