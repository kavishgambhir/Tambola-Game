import { Action } from '@ngrx/store';

export enum NumberGridActionTypes {
  LoadNumberGrid = '[NumberGrid] Load NumberGrid',
  GenerateNumber = '[NumberGrid] Generate next number',
  ResetNumberGrid = '[NumberGrid] Reset number grid'


}

export class LoadNumberGrid implements NumberGridActions {
  readonly type = NumberGridActionTypes.LoadNumberGrid;
  constructor(readonly payload: {
    numbersCalled: Map<number, boolean>;
    numberList: Array<number>;
    currentNumber: number;
  }) {

  }
}
export class ResetNumberGrid implements NumberGridActions {
  readonly type = NumberGridActionTypes.ResetNumberGrid;
  readonly payload=null;
}
export class GenerateNumber implements NumberGridActions {
  readonly type = NumberGridActionTypes.GenerateNumber;
  constructor(readonly payload: {
    numbersCalled: Map<number, boolean>;
    numberList: Array<number>;
    currentNumber: number;
  }) {
    console.log("Generate Number Action Called");

  }
}

export class NumberGridActions implements Action {
  readonly type: any;
  readonly payload:any;

}
export type ActionsUnion = GenerateNumber | ResetNumberGrid;
