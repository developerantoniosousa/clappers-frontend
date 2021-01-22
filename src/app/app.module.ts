import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './scenes/home/home.component';
import { RouterModule } from '@angular/router';
import { StateService } from './services/state.service';
import { SendClapsTeamComponent } from './scenes/send-claps-team/send-claps-team.component';
import { SendClapsCategoryComponent } from './scenes/send-claps-category/send-claps-category.component';
import { SendClapsAmountComponent } from './scenes/send-claps-amount/send-claps-amount.component';
import { LoginComponent } from './scenes/login/login.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SendClapsTeamComponent,
    SendClapsCategoryComponent,
    SendClapsAmountComponent,
    LoginComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([])
  ],
  providers: [StateService],
  bootstrap: [AppComponent]
})

export class AppModule { }
