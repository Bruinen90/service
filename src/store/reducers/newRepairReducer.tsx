import { NewRepair, Action } from '../../types/State';

import * as actionTypes from '../actions/actionTypes';

export default (
	state: NewRepair = { customer: { phoneNumber: '' } },
	action: Action
) => {
	switch (action.type) {
		case actionTypes.SET_NEW_CUSTOMER:
			console.log('creating new customer...', action.payload);
			return { ...state, customer: action.payload };
		case actionTypes.SET_DEVICE:
			console.log('setting device...', action.payload);
			return { ...state };
		case actionTypes.SET_REPAIR:
			console.log('setting repair...', action.payload);
			return { ...state };
		default:
			return state;
	}
};
