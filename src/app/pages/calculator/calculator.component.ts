import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../core/store';
import { CalculatorState } from '../../core/store/reducers/calculator.reducer';
import * as allActions from '../../core/store/actions/calculator.action';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent implements OnInit {
  public calculatorState: CalculatorState;

  constructor(private store: Store<fromStore.CalculatorState>) {}

  ngOnInit() {
    this.store
      .select<any>('reactiveCalc')
      .subscribe((data) => (this.calculatorState = data));
  }

  dispatchLoad() {}

  dispatchNumberClicked(number: number) {
    this.store.dispatch(new allActions.NumberEntered(number));
  }

  dispatchNegate() {
    this.store.dispatch(new allActions.Negate());
  }

  dispatchDecimalSeparator() {
    this.store.dispatch(new allActions.DecimalSeparator());
  }

  dispatchOp(op: string) {
    this.store.dispatch(new allActions.OpEntered(op));
  }

  getTotal() {
    this.store.dispatch(new allActions.GetTotal());
  }

  clear() {
    this.store.dispatch(new allActions.Clear());
  }
}
