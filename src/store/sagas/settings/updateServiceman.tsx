import axios from 'axios';
import { put } from 'redux-saga/effects';
import * as actionTypes from '../../actions/actionTypes';
import { FetchedServiceman } from '../../../types/Settings';

export function* updateServiceman(action: {
	type: string;
	payload: FetchedServiceman;
}): any {
	const response = yield axios.put(
		'/settings/update-serviceman',
		action.payload
	);
	if (response.status === 200) {
		yield put({
			type: actionTypes.UPDATE_SERVICEMAN_DATA,
			payload: action.payload,
		});
	}
	console.log(response);
}
