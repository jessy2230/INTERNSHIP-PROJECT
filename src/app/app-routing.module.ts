import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './component/profile/profile.component';
import { HomePageComponent } from './component/home-page/home-page.component';

const routes: Routes = [
  {
    path:'profile',component:ProfileComponent
  },
  {
    path:'home',component:HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
