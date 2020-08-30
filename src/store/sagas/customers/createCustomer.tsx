import { put } from 'redux-saga/effects';
import axios from 'axios';

// Types
import { ICustomer } from '../../../types/Customer';

export function* createCustomer(action: {
	type: string;
	payload: { customerData: ICustomer };
}) {
	try {
		const response = yield axios.post(
			'customers/new-customer',
			action.payload.customerData
		);
		console.log(response);
	} catch (err) {
		console.log(err);
	}
}
