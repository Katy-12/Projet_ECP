import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registter',
  templateUrl: './registter.component.html',
  styleUrls: ['./registter.component.scss']
})
export class RegistterComponent implements OnInit {

  public hide = false;
  public loginFormGroup: FormGroup;
  public credentials: any;
  public isWrongCredentials = false;

  constructor(
    private router: Router  ) { }

  ngOnInit() {
    this.buildForm();

  }

  buildForm() {
    this.loginFormGroup = new FormGroup({
      'login': new FormControl(),
      'password': new FormControl()
    });
    this.loginFormGroup.valueChanges.subscribe(
      (credentials: any) => this.credentials = credentials
    );
  }

  login() {
    
    // this.authService.login(this.credentials).subscribe(
    //   (data: { refreshToken: string, accessToken: string }) => {
    //     this.storageHelper.setLocalSorageData('numComptable', this.credentials.login)
    //     this.storageHelper.setLocalSorageData('accessToken', data.accessToken);
    //     this.storageHelper.setLocalSorageData('refreshToken', data.refreshToken);
    //     this.storageHelper.setLocalSorageData('loggedIn', 'true');
    //     this.router.navigate(['/dashboard/home']);
    //   },
    //   (err: HttpErrorResponse) => {
    //     if (err.status == 401) {
    //       this.isWrongCredentials = true;
    //     }
    //   }
    // )
  }



}
