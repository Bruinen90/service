import * as actionTypes from './actionTypes';
import { Field } from '../../types/Settings';
import { SettingsCategories, LoadingCategories } from '../../types/State';

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

export const setLoader = (payload: {
	loadingCategory: LoadingCategories;
	isLoading: boolean;
	recordId?: string;
}) => ({
	type: actionTypes.SET_LOADER,
	payload,
});
