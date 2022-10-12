import * as calculatorActions from '../actions/calculator.action';

export interface CalculatorState {
  firstNumber: number;
  secondNumber: number;
  currentOperation: string;
  negativeMode: boolean;
  total: Number;
  history: number[];
  decimalSeparator: boolean;
}

const initialState: CalculatorState = {
  firstNumber: null,
  secondNumber: null,
  currentOperation: null,
  negativeMode: false,
  total: 0,
  history: [],
  decimalSeparator: false,
};

export function getTotal(state: any): number {
  let total: any;
  const { firstNumber, secondNumber } = state;
  switch (state.currentOperation) {
    case '+':
      total = firstNumber + secondNumber;
      break;
    case '-':
      total = firstNumber - secondNumber;
      break;
    case '*':
      total = firstNumber * secondNumber;
      break;
    case '/':
      total = firstNumber / secondNumber;
      break;
    case '%':
      total = firstNumber % secondNumber;
      break;
  }
  return total;
}

export function calculatorReducer(
  state: CalculatorState = initialState,
  action: calculatorActions.calculatorTypes,
): CalculatorState {
  switch (action.type) {
    case calculatorActions.NEGATE: {
      console.log('get negate');
      return {
        ...state,
        firstNumber: state.firstNumber * -1,
      };
    }
    case calculatorActions.DECIMAL_SEPARATOR: {
      console.log('get decimal separator');
      return {
        ...state,
        decimalSeparator: !state.decimalSeparator,
      };
    }
    case calculatorActions.GET_TOTAL: {
      console.log('get total clicked');
      let total: number = getTotal(state);
      return {
        ...state,
        firstNumber: total,
        secondNumber: null,
        currentOperation: null,
        history: [...state.history, total],
      };
    }
    case calculatorActions.NUMBER_ENTERED: {
      console.log('number added');
      let newFirstNumber: any = state.firstNumber
          ? state.firstNumber.toString()
          : '0',
        newSecondNumber: any = state.secondNumber
          ? state.secondNumber.toString()
          : '0';
      if (state.currentOperation) {
        newSecondNumber += action.payload.toString();
        if (state.decimalSeparator && newSecondNumber.length > 1) {
          newSecondNumber =
            newSecondNumber.slice(0, -1) +
            '.' +
            newSecondNumber[newSecondNumber.length - 1];
          return {
            ...state,
            secondNumber: parseFloat(newSecondNumber),
            decimalSeparator: false,
          };
        }
        return {
          ...state,
          secondNumber: parseFloat(newSecondNumber),
        };
      } else {
        newFirstNumber += action.payload.toString();
        if (state.decimalSeparator && newFirstNumber.length > 1) {
          newFirstNumber =
            newFirstNumber.slice(0, -1) +
            '.' +
            newFirstNumber[newFirstNumber.length - 1];
          return {
            ...state,
            firstNumber: state.negativeMode
              ? parseFloat(newFirstNumber) * -1
              : parseFloat(newFirstNumber),
            negativeMode: false,
            total: 0,
            decimalSeparator: false,
          };
        }
        return {
          ...state,
          firstNumber: state.negativeMode
            ? parseFloat(newFirstNumber) * -1
            : parseFloat(newFirstNumber),
          negativeMode: false,
          total: 0,
        };
      }
    }

    case calculatorActions.OP_ENTERED: {
      console.log('op added');
      if (!state.firstNumber && !state.secondNumber && action.payload === '-') {
        return {
          ...state,
          negativeMode: true,
        };
      }
      if (state.firstNumber && !state.secondNumber) {
        return {
          ...state,
          currentOperation: action.payload,
        };
      }
      if (state.secondNumber && state.firstNumber) {
        let total: number = getTotal(state);
        return {
          ...state,
          firstNumber: total,
          secondNumber: null,
          currentOperation: null,
          history: [...state.history, total],
        };
      }
      return state;
    }

    case calculatorActions.CLEAR: {
      if (state.secondNumber) {
        return {
          ...state,
          secondNumber: null,
        };
      }
      if (state.currentOperation) {
        return {
          ...state,
          currentOperation: null,
        };
      }
      if (state.firstNumber) {
        return {
          ...state,
          firstNumber: null,
        };
      }
      return initialState;
    }
  }
  return state;
}
