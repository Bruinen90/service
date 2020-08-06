import axios from 'axios';
import { put } from 'redux-saga/effects';

// Actions
import * as actionTypes from '../../actions/actionTypes';
import * as actionCreators from '../../actions/actionCreators';

export function* autoLogin(action: { type: string }) {
	yield put(
		actionCreators.setLoader({
			loadingCategory: 'general',
			isLoading: true,
		})
	);
	try {
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
	} catch (err) {
		console.log(err);
	}
	yield put(
		actionCreators.setLoader({
			loadingCategory: 'general',
			isLoading: false,
		})
	);
}
