import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  public currentLanguage: string | null;

  constructor(private translate: TranslateService) {
    this.currentLanguage = localStorage.getItem('language') || 'en';
    this.translate.use(this.currentLanguage);
    this.translate.setDefaultLang(this.currentLanguage);
  }

  selectLanguage(language: string) {
    this.currentLanguage = language;
    localStorage.setItem('language', language);
    this.translate.use(language);
  }

  getTranslation(key: string): string {
    return this.translate.instant(key);
  }
}