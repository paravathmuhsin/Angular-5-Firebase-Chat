import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MessagesService } from './messages.service';

import { ChatComponent } from './chat.component';

export const routes: Routes = [
  { path: 'chat', component: ChatComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  declarations: [ChatComponent],
  providers: [MessagesService]
})
export class ChatModule { }
