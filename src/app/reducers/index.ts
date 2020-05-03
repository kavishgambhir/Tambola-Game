import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  Action
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { NumberGridActions, NumberGridActionTypes } from '../actions/number-grid.actions';


export interface NumberGridState {
  numbersCalled: Map<number, boolean>;
  numberList:Array<number>;
  currentNumber:number;

}
export interface TicketState {
id:number;
numbersMap: Map<number, boolean>;
  numberList: Array<number>;
  ticketGrid: Array<Array<number>>;
  numbersPosition: Map<number, []>;
}

export interface PlayerState {
  playerName:string,

}
export interface AppState {
  // players: PlayerComponent[];
  numberGrid: NumberGridState;
}

export function numberGridReducer(state: NumberGridState = initialNumberGridState(), action: NumberGridActions): NumberGridState {
  switch (action.type) {
    case NumberGridActionTypes.GenerateNumber:
      return action.payload;
    case NumberGridActionTypes.ResetNumberGrid:
      return Object.assign({}, initialNumberGridState());
    default:
      return state;
  }
}
export const initialNumberGridState:()=>NumberGridState =()=> ({
  numbersCalled:new Map(),
  numberList:[],
  currentNumber:0,
});
export const reducers: ActionReducerMap<AppState> = {

  numberGrid: numberGridReducer,
};

export const selectNumberGrid = (state: AppState) => state.numberGrid;