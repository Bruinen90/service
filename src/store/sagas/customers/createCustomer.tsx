import { put } from 'redux-saga/effects';
import axios from 'axios';
import * as actionTypes from '../../actions/actionTypes';

// Types
import { ICustomer } from '../../../types/Customer';

export function* createCustomer(action: {
	type: string;
	payload: { customerData: ICustomer };
}) {
	console.log('creating customer...');
	try {
		yield put({
			type: actionTypes.SET_NEW_CUSTOMER,
			payload: action.payload.customerData,
		});
		const response = yield axios.post(
			'customers/new-customer',
			action.payload.customerData
		);
		console.log(response);
	} catch (err) {
		console.log(err);
	}
}
