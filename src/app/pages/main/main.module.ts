import { NgModule } from '@angular/core';
import { SharedThemeModule } from '@theme/shared.theme.module';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    MainRoutingModule,
    SharedThemeModule,
    CommonModule,
  ]
})
export class MainModule { }
