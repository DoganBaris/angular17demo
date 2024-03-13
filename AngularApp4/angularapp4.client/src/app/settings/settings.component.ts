import { Component } from '@angular/core';
import { TranslationService } from '../utilities/translate/translation.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})

export class SettingsComponent {
  constructor(
    private translationService: TranslationService,
  ) { }
  
  selectLanguage(language: string) {
    this.translationService.selectLanguage(language);
  }
}
