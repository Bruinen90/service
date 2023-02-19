import axios from 'axios';
import { put } from 'redux-saga/effects';
import * as actionTypes from '../../actions/actionTypes';
import { CreatedServiceman, FetchedServiceman } from '../../../types/Settings';

export function* createNewServiceman(action: {
	type: string;
	payload: CreatedServiceman;
}): any {
	try {
		const response = yield axios.post(
			'/settings/new-serviceman',
			action.payload
		);
		const newServicemanData: FetchedServiceman = {
			...action.payload,
			...response.data,
		};
		console.log(newServicemanData);
		if (response.data) {
			yield put({
				type: actionTypes.ADD_NEW_SERVICEMAN,
				payload: newServicemanData,
			});
		}
	} catch (err) {
		console.log(err);
	}
}
