import { put } from 'redux-saga/effects';
import * as actionTypes from '../../actions/actionTypes';
import axios from 'axios';
import { withLoader } from '../helpers';

// Types
import { Field, FetchedField, FieldCategory } from '../../../types/Settings';

interface CategorizedFields {
	customers: Field[];
	devices: Field[];
	repairs: Field[];
}

export function* fetchSettingsFields() {
	function* cb() {
		try {
			const response = yield axios.get('settings/all-fields');
			if (response.data) {
				console.log(response.data);
				const settingsFields = response.data
					.allSettingsFields as FetchedField[];
				const categorizedFields: CategorizedFields = {
					customers: settingsFields.filter(
						fields => fields.category === 'customers'
					),
					devices: settingsFields.filter(
						fields => fields.category === 'devices'
					),
					repairs: settingsFields.filter(
						fields => fields.category === 'repairs'
					),
				};
				yield put({
					type: actionTypes.SET_SETTINGS_FIELDS,
					payload: categorizedFields,
				});
			}
		} catch (err) {
			console.log(err);
		}
	}
	yield withLoader({
		loadingCategory: 'general',
		recordId: 'settings-fields',
		cb: cb,
	});
}
