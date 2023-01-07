import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyFirstNxLibModule } from '@muhamedkarajic/my-first-nx-lib';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MyFirstNxLibModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
