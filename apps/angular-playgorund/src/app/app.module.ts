import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyFirstNxLibModule } from '@muhamedkarajic/my-first-nx-lib';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, MyFirstNxLibModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
