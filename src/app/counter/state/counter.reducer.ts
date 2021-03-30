import { createReducer, on } from '@ngrx/store';
import { initialState } from './counter.state';
import { increment, decrement, reset, customIncrement, changeCounterName } from './counter.actions';

const _counterReducer = createReducer(
  initialState,
  on(increment, (state)=>{
    return {
      ...state,
      counter: state.counter + 3,
    }
  }),
  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    }
  }),
  on(reset, (state, action) => {
    console.log(action);
    return {
      ...state,
      counter: 0
    }
  }),
  on(customIncrement, (state, action) => {
    console.log(action);
    return {
      ...state,
      counter: state.counter + action.value
    }
  }),
  on(changeCounterName, (state) => {
    return {
      ...state,
      name: 'Modified ' + state.name
    }
  })
)

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}
