import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CreditCardComponent } from './modules/custom-module/credit-card/credit-card.component';
import { CreditCardMaskPipe } from './modules/custom-module/credit-card-mask.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreditCardComponent,
    CreditCardMaskPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
