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
		case actionTypes.SET_DEFAULT_REPAIR_VALUES:
			return { ...action.payload };
		case actionTypes.SET_DEVICE_DATA:
			return { ...state, device: { ...state.device, ...action.payload } };
		case actionTypes.SET_CUSTOMER_DATA:
			return {
				...state,
				customer: { ...state.customer, ...action.payload },
			};
		case actionTypes.CREATE_NEW_DEVICE:
			return { ...state };
		case actionTypes.SET_PROBLEM_DATA:
			return {
				...state,
				problem: { ...state.problem, ...action.payload },
			};
		case actionTypes.SET_NEW_REPAIR:
			return {
				...state,
				...action.payload,
			};
		case actionTypes.SET_REPAIR:
			return { ...state };
		default:
			return state;
	}
};

export default newRepairReducer;
