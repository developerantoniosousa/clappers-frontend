import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './scenes/home/home.component';
import { LoginComponent } from './scenes/login/login.component';
import { SendClapsTeamComponent } from './scenes/send-claps-team/send-claps-team.component';
import { SendClapsCategoryComponent } from './scenes/send-claps-category/send-claps-category.component';
import { SendClapsAmountComponent } from './scenes/send-claps-amount/send-claps-amount.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'send-claps-team', component: SendClapsTeamComponent },
  { path: 'send-claps-category', component: SendClapsCategoryComponent },
  { path: 'send-claps-amount', component: SendClapsAmountComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
