// core
import { Injectable, EventEmitter } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Injectable()
export class LanguageService {
  onLangChange: EventEmitter<LangChangeEvent>;

  constructor(private translateService: TranslateService) {

    /*
     *  Language configurations
     */
    translateService.addLangs(['en', 'de']);
    translateService.setDefaultLang('ro');
    translateService.use(localStorage.getItem('lang') || translateService.getDefaultLang());
    this.onLangChange = translateService.onLangChange;
    translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      localStorage.setItem('lang', event.lang);
    });
  }

  getCurrentLanguage() {
    return this.translateService.currentLang;
  }

  setCurrentLanguage(lang) {
    this.translateService.use(lang);
  }
}
