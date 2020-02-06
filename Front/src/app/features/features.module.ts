import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { FeaturesComponent } from './features.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {  MatIconModule, MatMenuModule, MatButtonModule, } from '@angular/material';

const materialModule = [
  MatToolbarModule,
  MatIconModule,
  MatMenuModule,
  MatButtonModule,
  MatButtonModule,
  MatMenuModule,
]
@NgModule({
  declarations: [FeaturesComponent],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    MatToolbarModule,
    ...materialModule
  ]
})
export class FeaturesModule { }
