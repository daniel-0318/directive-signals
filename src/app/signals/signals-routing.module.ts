import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignalsLayoutComponent } from './layout/signals-layout/signals-layout.component';
import { CounterPageComponent } from './components/counterPage/counterPage.component';
import { UserInfoPageComponent } from './components/userInfoPage/userInfoPage.component';
import { PropertiesPageComponent } from './components/propertiesPage/propertiesPage.component';

const routes: Routes = [
  {
    path: '',
    component: SignalsLayoutComponent,
    children:[
      { path: 'counter', component: CounterPageComponent },
      { path: 'user-info', component: UserInfoPageComponent },
      { path: 'properties', component: PropertiesPageComponent },
      { path: '**', redirectTo: 'counter' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignalsRoutingModule { }
