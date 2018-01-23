// core
import { TranslateService } from '@ngx-translate/core';
import { Injectable } from '@angular/core';

@Injectable()
export class ErrorMessageService {
  constructor(
    private translateService: TranslateService
  ) {}

  public showErrorMessage(message: string) {
    this.translateService.get('dismiss').subscribe((res: string) => {
      alert(message);
    });
  }
}
