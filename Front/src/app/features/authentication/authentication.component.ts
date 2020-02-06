import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  
  public selectedLanguage = null;
  public isLgChanged = false;
  public languages = [
    { key: 'fr', value: 'Francais' },
    { key: 'en', value: 'Anglais' },
  ];

  constructor(
    // private translate: TranslateService,
    // private router: Router
  ) { }

  ngOnInit() {
    // this.storageHelper.setLocalSorageData('isLgChanged', this.isLgChanged);
    // if (this.storageHelper.getLocalSorageData('language')) {
    //   this.selectedLanguage = this.storageHelper.getLocalSorageData('language');
    // }
  }

  changeLanguage(language: string) {
    // this.isLgChanged = !this.isLgChanged;
    // this.storageHelper.setLocalSorageData('isLgChanged', this.isLgChanged);
    // this.storageHelper.setLocalSorageData('language', language);
    // this.translate.setDefaultLang(language);
  }
}
