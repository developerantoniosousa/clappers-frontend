import { NgModule } from '@angular/core';
import { HomeComponent } from './scenes/home/home.component';
import { LoginComponent } from './scenes/login/login.component';
import { SendClapsComponent } from './scenes/send-claps/send-claps.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'send-claps', component: SendClapsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
