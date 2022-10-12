import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTER_UTILS } from './core/config/router.config';

const routes: Routes = [
  {
    path: ROUTER_UTILS.config.base.home,
    redirectTo: ROUTER_UTILS.config.base.calculator,
    pathMatch: 'full',
  },
  {
    path: ROUTER_UTILS.config.base.calculator,
    children: [
      {
        path: '',
        loadChildren: async () =>
          (await import('./pages/calculator/calculator.module'))
            .CalculatorModule,
      },
    ],
  },
  {
    path: '**',
    redirectTo: ROUTER_UTILS.config.base.calculator,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
