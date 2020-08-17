import { put } from 'redux-saga/effects';
import * as actionTypes from '../../actions/actionTypes';
import axios from 'axios';
import { withLoader } from '../helpers';

// Types
import { Field, FetchedField, FieldCategory } from '../../../types/Settings';

interface CategorizedFields {
	customer: Field[];
	device: Field[];
	repair: Field[];
}

export function* fetchSettingsFields() {
	function* cb() {
		try {
			const response = yield axios.get('settings/all-fields');
			if (response.data) {
				const settingsFields = response.data as FetchedField[];
				const categorizedFields: CategorizedFields = {
					customer: settingsFields.filter(
						fields => fields.category === 'customer'
					),
					device: settingsFields.filter(
						fields => fields.category === 'device'
					),
					repair: settingsFields.filter(
						fields => fields.category === 'repair'
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
