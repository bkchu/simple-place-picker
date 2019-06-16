import { combineReducers, createStore } from 'redux';
import { choiceReducer, ChoiceState } from '../reducer';
export interface RootState {
    choice: ChoiceState
}
const store = createStore<RootState, any, any, any>(
    combineReducers({
        choice: choiceReducer
}));

export default store;