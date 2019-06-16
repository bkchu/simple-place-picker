import { Choice } from './choice/types';
import { ChoiceActionTypes, ADD_CHOICE, DELETE_CHOICE, GO_SOMEWHERE, GO_BACK } from './actionTypes';

export interface ChoiceState {
  choices: Choice[];
  chosenPlace: string;
}

export const initialState: ChoiceState = {
  choices: [],
  chosenPlace: ''
};

export const choiceReducer = (state: any = initialState, action: ChoiceActionTypes) => {
  switch (action.type) {
    case ADD_CHOICE:
      return {
        ...state,
        choices: [...state.choices, action.payload]
      };

    case DELETE_CHOICE:
      return {
        ...state,
        choices: state.choices.filter((_: any, index: string | number) => index !== action.payload)
      };

    case GO_SOMEWHERE:
      const randomIndex = Math.round(Math.random() * (state.choices.length - 1));
      const randomChoice = state.choices.filter((_: any, index: string | number) => index === randomIndex);
      console.log(randomChoice);
      return {
        ...state,
        chosenPlace: randomChoice
      };

    case GO_BACK:
      return {
        ...state,
        chosenPlace: ''
      };

    default:
      return state;
  }
};
