import { put } from 'redux-saga/effects';
import axios from 'axios';

// Types
import { LoginDataInterface } from '../../../types/Auth';

export function* loginService(action: {
	type: string;
	payload: LoginDataInterface;
}) {
	try {
		const response = yield axios.post('auth/login', action.payload);
		if (response.status === 200) {
			const { token, _id, name } = response.data;
			yield localStorage.setItem('token', token);
			axios.defaults.headers.common['Authorization'] = token.toString();
			// Action to set company name and _id in state
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
