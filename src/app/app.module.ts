import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListComponent } from './list/list.component';
import {catsService} from './services/catsService';
import { FactsComponent } from './facts/facts.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListComponent,
    FactsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule],
  providers: [catsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
