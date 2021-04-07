import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CounterComponent } from './counter/counter.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CounterButtonComponent } from './counter-button/counter-button.component';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './state/counter.reducer';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: CounterComponent
  },
];

@NgModule({
  declarations: [
    CounterComponent,
    CounterOutputComponent,
    CounterButtonComponent,
    CustomInputComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('counter', counterReducer),
  ],
})
export class CounterModule { }
