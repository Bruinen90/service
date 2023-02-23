import axios from 'axios';
import { put } from 'redux-saga/effects';
import * as actionTypes from '../../actions/actionTypes';

export function* deleteServiceman(action: {
	type: string;
	payload: string;
}): any {
	try {
		const response = yield axios.delete(
			`settings/delete-serviceman/${action.payload}`
		);
		if (response.status === 200) {
			yield put({
				type: actionTypes.DELETE_SERVICEMAN,
				payload: action.payload,
			});
		}
	} catch (err) {
		console.log(err);
	}
}
