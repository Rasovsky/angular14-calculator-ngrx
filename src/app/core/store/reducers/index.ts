import { ActionReducerMap } from '@ngrx/store';

import * as calculatorReducer from './calculator.reducer';

export interface CalculatorState {
  pizzas: calculatorReducer.CalculatorState;
}

export const calculatorReducers: ActionReducerMap<CalculatorState> = {
  pizzas: calculatorReducer.calculatorReducer,
};
