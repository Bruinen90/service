import axios from 'axios';
import { put } from 'redux-saga/effects';
import { NewRepair } from '../../../types/State';

import * as actionTypes from '../../actions/actionTypes';

export function* newRepair(action: { type: string; payload: NewRepair }) {
	const createdRepair = yield axios.post(
		'repairs/new-repair',
		action.payload
	);
	yield put({
		type: actionTypes.ADD_NEW_REPAIR,
		payload: action.payload,
	});
}
