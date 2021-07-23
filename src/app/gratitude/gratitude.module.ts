import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BubbleComponent } from './bubble/bubble.component';
import { GratitudeComponent } from './gratitude/gratitude.component';

@NgModule({
  imports: [CommonModule],
  declarations: [BubbleComponent, GratitudeComponent]
})
export class GratitudeModule {}
