import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator.component';

const routes: Routes = [
  {
    path: '',
    component: CalculatorComponent,
    data: {
      title: 'Calculator - demo with ngrx',
      description: 'Calculator - demo with ngrx',
      robots: 'index, follow',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalculatorRoutingModule {}
