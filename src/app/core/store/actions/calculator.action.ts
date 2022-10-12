import { Action } from '@ngrx/store';

export const NEGATE = '[Calc] NEGATE operation';
export const DECIMAL_SEPARATOR = '[Calc] DECIMAL SEPARATOR operation';
export const NUMBER_ENTERED = '[Calc] number entered';
export const OP_ENTERED = '[Calc] OP entered';
export const GET_TOTAL = '[Calc] Get total entered';
export const CLEAR = '[CALC] CLEAR';

export class Negate implements Action {
  readonly type = NEGATE;

  constructor() {}
}

export class DecimalSeparator implements Action {
  readonly type = DECIMAL_SEPARATOR;

  constructor() {}
}

export class NumberEntered implements Action {
  readonly type = NUMBER_ENTERED;

  constructor(public payload: number) {}
}

export class OpEntered implements Action {
  readonly type = OP_ENTERED;

  constructor(public payload: string) {}
}

export class GetTotal implements Action {
  readonly type = GET_TOTAL;
}

export class Clear implements Action {
  readonly type = CLEAR;
}

export type calculatorTypes =
  | Negate
  | DecimalSeparator
  | NumberEntered
  | OpEntered
  | GetTotal
  | Clear;
