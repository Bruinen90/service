import { NewRepair, Action } from '../../types/State';

import * as actionTypes from '../actions/actionTypes';

const newRepairReducer = (
	state: NewRepair = {
		customer: { phoneNumber: '' },
		device: {},
		problem: {},
	},
	action: Action
) => {
	switch (action.type) {
		case actionTypes.SET_DEVICE_DATA:
			console.log('setting device data...', action.payload);
			return { ...state, device: { ...state.device, ...action.payload } };
		case actionTypes.SET_CUSTOMER_DATA:
			return {
				...state,
				customer: { ...state.customer, ...action.payload },
			};
		case actionTypes.CREATE_NEW_DEVICE:
			console.log('setting device...', action.payload);
			return { ...state };
		case actionTypes.SET_PROBLEM_DATA:
			console.log('setting problem data...', action.payload);
			return {
				...state,
				problem: { ...state.problem, ...action.payload },
			};
		case actionTypes.SET_REPAIR:
			console.log('setting repair...', action.payload);
			return { ...state };
		default:
			return state;
	}
};

export default newRepairReducer;
