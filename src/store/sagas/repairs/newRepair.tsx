import axios from 'axios';
import { put } from 'redux-saga/effects';
import { NewRepair } from '../../../types/State';

import * as actionTypes from '../../actions/actionTypes';

export function* newRepair(action: { type: string; payload: NewRepair }) {
	const { payload } = action;
	const response = yield axios.post('repairs/new-repair', payload);
	yield put({
		type: actionTypes.SET_NEW_REPAIR,
		payload: {
			_id: response.data._id,
			customer: { ...payload.customer, _id: response.data.customer },
			device: { ...payload.device, _id: response.data.device },
			problem: payload.problem,
		},
	});
}
