import * as actionTypes from '../actions/actionTypes';

// Types
import { Action, Company } from '../../types/State';

export default (state: Company = {}, action: Action) => {
	switch (action.type) {
		case actionTypes.SET_SERVICE_LOGIN:
			const { _id, name } = action.payload;
			return { _id, name };
		case actionTypes.SET_SERVICE_LOGOUT:
			return {};
		default:
			return state;
	}
};
