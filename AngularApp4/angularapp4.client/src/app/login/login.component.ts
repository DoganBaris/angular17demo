import { Login } from '../common/model/login/loginModel';
import { Client } from '../common/model/login/clientModel';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SnackBar } from '../utilities/snackBar';
import { SnacBarType } from '../common/enum/snacBarType';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from '../core/services/auth.service';

import { TranslationService } from '../utilities/translate/translation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login = {} as Login;
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  constructor(
    private authService: AuthService, 
    private router: Router, 
    private spinnerService: NgxSpinnerService, 
    private snackBar: SnackBar,  
    private translationService: TranslationService) {
    this.login.Client = {} as Client;
  }

  ngOnInit(): void { }

  onSubmit(): void {
    this.spinnerService.show();
    // this.authService.isLoggedIn = !this.authService.isLoggedIn;
    //     this.router.navigateByUrl('admin');
    this.login.DomainType = null;
    this.login.Domain = '';
    this.login.UserName = this.getUserName as string;
    this.login.Password = this.getPassword as string;
    this.login.Client.Version = '';
    this.login.Client.Device = '';
    this.login.Client.Platform = '';
    this.login.Client.Resolution = '';
    this.login.Client.Language = '';
    this.login.Client.DateTime = '';

    this.authService.login(this.login).subscribe((success) => {
      if (success.IsSuccessful) {
        this.spinnerService.hide();
        // this.authService.isLoggedIn();
        this.router.navigateByUrl('admin');
      }
      else {
        this.spinnerService.hide();
        this.snackBar.openSnackBar(this.translationService.getTranslation('login.UsernamePasswordWrong'), undefined, SnacBarType.Warning);
      }
    });
  }

  get getUserName() {
    return this.loginForm.get('username')?.value;
  }
  get getPassword() {
    return this.loginForm.get('password')?.value;
  }
}
