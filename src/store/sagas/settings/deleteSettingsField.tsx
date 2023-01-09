import { put } from 'redux-saga/effects';
import * as actionCreators from '../../actions/actionCreators';
import axios from 'axios';

// Types
import { FieldCategory } from '../../../types/Settings';

export function* deleteSettingsField(action: {
	type: string;
	payload: { _id: string; category: FieldCategory };
}) {
	try {
		const response = yield axios.delete(
			`settings/delete-field/${action.payload._id}`
		);
		console.log(response);
		if (response.status === 200) {
			yield put(
				actionCreators.deleteSettingsFiels({
					settingsCategory: action.payload.category,
					deleteId: action.payload._id,
				})
			);
		}
	} catch (err) {
		console.log(err);
	}
}
