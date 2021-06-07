import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TradersComponent } from './traders/traders.component';
import { TraderComponent } from './trader/trader.component';

const routes: Routes = [
  { path: 'traders', component: TradersComponent },
  { path: 'trader/:id', component: TraderComponent },
];

@NgModule({
  declarations: [AppComponent, TradersComponent, TraderComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
