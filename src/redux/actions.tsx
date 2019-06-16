import { ADD_CHOICE, ChoiceActionTypes, DELETE_CHOICE, GO_SOMEWHERE, GO_BACK } from "./actionTypes";

export function addChoice(choice: string): ChoiceActionTypes {
  return {
    type: ADD_CHOICE,
    payload: choice
  }
}

export function deleteChoice(index: number): ChoiceActionTypes {
  return {
    type: DELETE_CHOICE,
    payload: index
  }
}

export function goSomewhere(): ChoiceActionTypes {
  return {
    type: GO_SOMEWHERE
  }
}

export function goBack(): ChoiceActionTypes {
  return {
    type: GO_BACK
  }
}