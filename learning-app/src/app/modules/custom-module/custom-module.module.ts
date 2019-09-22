import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { CreditCardMaskPipe } from './credit-card-mask.pipe';



@NgModule({
  declarations: [CreditCardComponent, CreditCardMaskPipe],
  imports: [
    CommonModule
  ]
})
export class CustomModuleModule { }
