import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FontSizeComponent } from './bai3_angular_overview/font-size/font-size.component';
import { PetComponent } from './bai3_angular_overview/pet/pet.component';
import { CalculatorComponent } from './bai3_angular_overview/calculator/calculator.component';
import {FormsModule} from '@angular/forms';
import { ColorPickerComponent } from './bai3_angular_overview/color-picker/color-picker.component';
import { NameCardComponent } from './bai5_component_interaction/name-card/name-card.component';
import { ProgressBarComponent } from './bai5_component_interaction/progress-bar/progress-bar.component';
import { CountdownTimerComponent } from './bai5_component_interaction/countdown-timer/countdown-timer.component';
import { CountdownTimerAliasComponent } from './bai5_component_interaction/countdown-timer-alias/countdown-timer-alias.component';
import { CountdownTimerEventComponent } from './bai5_component_interaction/countdown-timer-event/countdown-timer-event.component';
import { CountdownTimerEventAliasComponent } from './bai5_component_interaction/countdown-timer-event-alias/countdown-timer-event-alias.component';
import { CountdownTimerGetSetComponent } from './bai5_component_interaction/countdown-timer-get-set/countdown-timer-get-set.component';
import { CountdownTimerOnchangesComponent } from './bai5_component_interaction/countdown-timer-onchanges/countdown-timer-onchanges.component';
import { RatingBarComponent } from './bai5_component_interaction/rating-bar/rating-bar.component';
import { HackerNewsComponent } from './bai4_angular_component_&_template/hacker-news/hacker-news.component';


@NgModule({
  declarations: [
    AppComponent,
    FontSizeComponent,
    PetComponent,
    CalculatorComponent,
    ColorPickerComponent,
    NameCardComponent,
    ProgressBarComponent,
    CountdownTimerComponent,
    CountdownTimerAliasComponent,
    CountdownTimerEventComponent,
    CountdownTimerEventAliasComponent,
    CountdownTimerGetSetComponent,
    CountdownTimerOnchangesComponent,
    RatingBarComponent,
    HackerNewsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
