import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { Ripple } from 'primeng/ripple';
import { ToolbarModule } from 'primeng/toolbar';
import { Toolbar } from 'primeng/toolbar';
import { SplitButton } from 'primeng/splitbutton';
import { InputTextModule } from 'primeng/inputtext';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { MegaMenuModule } from 'primeng/megamenu';
import { CardModule } from 'primeng/card';


const mismodulos: any = [
  ButtonModule,
  CardModule,
  Ripple,
  ToastModule,
  ToolbarModule,
  Toolbar,
  SplitButton,
  InputTextModule,
  IconField,
  InputIcon,
  MegaMenuModule
  


];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    mismodulos
  ],
  exports: [
    mismodulos
  ]
})
export class ModprimengModule { }
