import { Action, Repair } from '../../types/State';
import * as actionTypes from '../actions/actionTypes';
const repairsReducer = (state: Repair[] = [], action: Action) => {
	switch (action.type) {
		case actionTypes.SET_ALL_REPAIRS:
			return action.payload;
		default:
			return state;
	}
};

export default repairsReducer;
