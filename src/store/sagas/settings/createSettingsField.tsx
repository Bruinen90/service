import * as actionTypes from '../../actions/actionTypes';
import axios from 'axios';
import { withLoader } from '../helpers';

import { put } from 'redux-saga/effects';

// Types
import { SettingsCategories } from '../../../types/State';
import { Field } from '../../../types/Settings';

export function* createSettingsField(action: {
	type: string;
	payload: {
		category: SettingsCategories;
		data: Field;
	};
}) {
	const { category, data } = action.payload;
	try {
		const response = yield axios.post('/settings/new-field', {
			...data,
			category,
		});
		if (data._id) {
			yield put({
				type: actionTypes.UPDATE_SETTING_FIELD,
				payload: {
					category,
					data,
				},
			});
		} else {
			yield put({
				type: actionTypes.CREATE_SETTING_FIELD,
				payload: {
					category,
					data: { ...data, _id: response.data._id },
				},
			});
		}
	} catch (err) {
		console.log(err);
	}
}
