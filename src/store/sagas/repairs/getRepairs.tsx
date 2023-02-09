import axios from 'axios';
import { put } from 'redux-saga/effects';
import * as actionTypes from '../../actions/actionTypes';

export function* getAllRepairs(action: { type: string }) {
	const response = yield axios.get('repairs/get-all');
	console.log(response);
	yield put({ type: actionTypes.SET_ALL_REPAIRS, payload: response.data });
}
