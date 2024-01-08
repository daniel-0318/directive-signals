import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignalsRoutingModule } from './signals-routing.module';
import { SignalsLayoutComponent } from './layout/signals-layout/signals-layout.component';
import { UserInfoPageComponent } from './components/userInfoPage/userInfoPage.component';
import { CounterPageComponent } from './components/counterPage/counterPage.component';
import { PropertiesPageComponent } from './components/propertiesPage/propertiesPage.component';
import { SideMenuComponent } from './components/sideMenu/sideMenu.component';


@NgModule({
  declarations: [
    CounterPageComponent,
    PropertiesPageComponent,
    SideMenuComponent,
    SignalsLayoutComponent,
    UserInfoPageComponent,
  ],
  imports: [
    CommonModule,
    SignalsRoutingModule
  ]
})
export class SignalsModule { }
