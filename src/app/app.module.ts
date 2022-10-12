import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { calculatorReducer } from './core/store/reducers/calculator.reducer';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ reactiveCalc: calculatorReducer }),
    //reason for the ActionReducerMap is because forRoot() takes only that type of reducer or InjectionToken
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
