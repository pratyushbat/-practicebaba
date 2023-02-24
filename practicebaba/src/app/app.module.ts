import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './pages/input/input.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { CounterComponent } from './pages/counter/counter.component';
import { TempInputComponent } from './pages/temp-input/temp-input.component';
import { ListComponent } from './pages/list/list.component';
import { WrapperComponent } from './pages/wrapper/wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    HomeComponent,
    CounterComponent,
    TempInputComponent,
    ListComponent,
    WrapperComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
