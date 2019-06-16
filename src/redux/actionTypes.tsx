export const ADD_CHOICE = 'ADD_CHOICE';
export const DELETE_CHOICE = 'DELETE_CHOICE';
export const GO_SOMEWHERE = 'GO_SOMEWHERE';
export const GO_BACK = 'GO_BACK';

interface AddChoiceAction {
  type: typeof ADD_CHOICE;
  payload: string;
}

interface DeleteChoiceAction {
  type: typeof DELETE_CHOICE;
  payload: number;
}

interface GoSomewhereAction {
  type: typeof GO_SOMEWHERE;
}

interface GoBackAction {
  type: typeof GO_BACK;
}

export type ChoiceActionTypes = 
  | AddChoiceAction
  | DeleteChoiceAction
  | GoSomewhereAction
  | GoBackAction;
