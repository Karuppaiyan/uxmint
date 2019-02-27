import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BestBirthdaysComponent } from './main-content/best-birthdays/best-birthdays.component';
import { PropertyTypeComponent } from './main-content/property-type/property-type.component';
import { MainContentComponent } from './main-content/main-content.component';
import { WeDoItComponent } from './main-content/we-do-it/we-do-it.component';
import { AboutEventsComponent } from './main-content/about-events/about-events.component';
import { TheCustomersComponent } from './main-content/the-customers/the-customers.component';
import { WorkWithBrandsComponent } from './main-content/work-with-brands/work-with-brands.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    BestBirthdaysComponent,
    MainContentComponent,
    PropertyTypeComponent,
    WeDoItComponent,
    AboutEventsComponent,
    TheCustomersComponent,
    WorkWithBrandsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
