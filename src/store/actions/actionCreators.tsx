import * as actionTypes from './actionTypes';
import { Field } from '../../types/Settings';
import { SettingsCategories } from '../../types/State';

export const createSettingsField = (payload: {
	settingsCategory: SettingsCategories;
	newFieldData: Field;
}) => ({
	type: actionTypes.CREATE_SETTING_FIELD,
	payload: {
		category: payload.settingsCategory,
		data: payload.newFieldData,
	},
});

export const deleteSettingsFiels = (payload: {
	settingsCategory: SettingsCategories;
	deleteId: string;
}) => ({
	type: actionTypes.DELETE_SETTING_FIELD,
	payload: {
		category: payload.settingsCategory,
		deleteId: payload.deleteId,
	},
});
