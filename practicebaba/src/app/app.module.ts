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
import { HelloComponent } from './pages/hello/hello.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { ByeComponent } from './pages/bye/bye.component';
import { ParentOneComponent } from './pages/parent-one/parent-one.component';
import { ParentOneChildComponent } from './pages/parent-one-child/parent-one-child.component';
import { MessageComponent } from './pages/message/message.component';
import { HeaderComponent } from './pages/header/header.component';
import { AboutComponent } from './pages/about/about.component';
import { AboutEditComponent } from './pages/about/about-edit/about-edit.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AccessdeniedComponent } from './pages/accessdenied/accessdenied.component';
import { FeatureModule } from './feature/feature.module';
import { SharedModule } from './shared/shared.module';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    HomeComponent,
    CounterComponent,
    TempInputComponent,
    ListComponent,
    WrapperComponent,
    HelloComponent,
    PagenotfoundComponent,
    ByeComponent,
    ParentOneComponent,
    ParentOneChildComponent,
    MessageComponent,
    HeaderComponent,
    AboutComponent,
    AboutEditComponent,
    AdminComponent,
    AccessdeniedComponent,
    HighlightDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FeatureModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
