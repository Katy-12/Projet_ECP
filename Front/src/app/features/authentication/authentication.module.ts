import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatCheckboxModule, MatCardModule, MatIconModule, MatInputModule, MatSelectModule, MatDialog, MatDialogModule, MatSnackBar, MatSnackBarModule } from '@angular/material';


import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication.component';
import { LoginComponent } from './components/login/login.component';
import { RegistterComponent } from './components/registter/registter.component';

const materialModule = [
  MatButtonModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatDialogModule
]

@NgModule({
  declarations: [AuthenticationComponent, LoginComponent, RegistterComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ...materialModule,
    MatSnackBarModule
  ],
  providers: [
    MatDialog,
  ],
  entryComponents : [
  ]

})
export class AuthenticationModule { }
