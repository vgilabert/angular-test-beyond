import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { GratitudeComponent } from './gratitude/gratitude/gratitude.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, GratitudeComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
