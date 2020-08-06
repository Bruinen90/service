import axios from 'axios';
import { put } from 'redux-saga/effects';

// Actions
import * as actionTypes from '../../actions/actionTypes';

export function* autoLogin(action: { type: string }) {
	const token = localStorage.getItem('token');
	if (token) {
		yield (axios.defaults.headers.common[
			'Authorization'
		] = token.toString());
		const response = yield axios.post('auth/verifyToken');
		if (response && response.status === 200) {
			const { _id, name } = response.data;
			yield put({
				type: actionTypes.SET_SERVICE_LOGIN,
				payload: { _id, name },
			});
		} else {
			console.log('error during auto login');
		}
	}
}
