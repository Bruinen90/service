import axios from 'axios';
import { put } from 'redux-saga/effects';
import { NewRepair } from '../../../types/State';

import * as actionTypes from '../../actions/actionTypes';

export function* newRepair(action: { type: string; payload: NewRepair }) {
	const response = yield axios.post('repairs/new-repair', action.payload);
	console.log(response);
	// yield put({
	// 	type: actionTypes.ADD_NEW_REPAIR,
	// 	payload: action.payload,
	// });
}
