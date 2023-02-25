import axios from 'axios';
import { put } from 'redux-saga/effects';
import { FetchedRepair } from '../../../types/Repair';
import * as actionTypes from '../../actions/actionTypes';

export function* getAllRepairs(action: { type: string }): any {
	try {
		const response = yield axios.get('repairs/get-all');
		if (response.status === 200 && response.data) {
			yield put({
				type: actionTypes.SET_ALL_REPAIRS,
				payload: response.data,
			});
		} else {
			console.log('No repairs found in DB');
		}
	} catch (err) {
		console.log(err);
	}
}
