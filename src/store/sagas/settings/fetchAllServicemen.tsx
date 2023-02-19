import axios from 'axios';
import { put } from 'redux-saga/effects';
import * as actionTypes from '../../actions/actionTypes';

export function* fetchAllServicemen(action: { type: string }): any {
	try {
		const response = yield axios.get('settings/get-all-servicemen');
		if (response.data) {
			console.log(response.data);
			yield put({
				type: actionTypes.SET_SERVICEMEN,
				payload: response.data.allServicemen,
			});
		}
	} catch (err) {
		console.log(err);
	}
}
