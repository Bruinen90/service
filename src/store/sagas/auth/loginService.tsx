import { put } from 'redux-saga/effects';
import axios from 'axios';

// Actions
import * as actionTypes from '../../actions/actionTypes';
import { withLoader } from '../helpers';

// Types
import { LoginDataInterface } from '../../../types/Auth';

export function* loginService(action: {
	type: string;
	payload: LoginDataInterface;
}) {
	function* cb() {
		try {
			const response = yield axios.post('auth/login', action.payload);
			if (response && response.status === 200) {
				const { token, _id, name } = response.data;
				yield localStorage.setItem('token', token);
				axios.defaults.headers.common[
					'Authorization'
				] = token.toString();
				yield put({
					type: actionTypes.SET_SERVICE_LOGIN,
					payload: { _id, name },
				});
			} else {
				console.log('Unhadled login error');
			}
		} catch (err) {
			if (err.response.status === 401) {
				console.log('Wrong credentials, plase try again');
			} else {
				console.log('There is a problem with server');
				console.log(err);
			}
		}
	}
	yield withLoader({
		loadingCategory: 'fetchData',
		recordId: 'loggingIn',
		cb: cb,
	});
}
