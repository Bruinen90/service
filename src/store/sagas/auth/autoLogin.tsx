import axios from 'axios';
import { put } from 'redux-saga/effects';
import { afterLoginSagas } from './afterLoginSagas';

// Actions
import * as actionTypes from '../../actions/actionTypes';
import { withLoader } from '../helpers';

export function* autoLogin(action: { type: string }) {
	function* tryAutoLogin() {
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
					yield afterLoginSagas();
				} else {
					console.log('error during auto login');
				}
			}
		} catch (err) {
			console.log(err);
		}
	}

	yield withLoader({ loadingCategory: 'general', cb: tryAutoLogin });
}
