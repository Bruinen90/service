import * as actionTypes from '../actions/actionTypes';

// Types
import {
	Action,
	Settings,
	DEFAULT_SETTINGS,
	SettingsCategories,
} from '../../types/State';
import { Field } from '../../types/Settings';

const settingsReducer = (
	state: Settings = DEFAULT_SETTINGS,
	action: Action
) => {
	switch (action.type) {
		case actionTypes.CREATE_SETTING_FIELD:
			const settingsCategoryToAdd = action.payload
				.category as SettingsCategories;
			const dataToAdd = action.payload.data as Field;
			return {
				...state,
				[settingsCategoryToAdd]: {
					...state[settingsCategoryToAdd],
					fields: [...state[settingsCategoryToAdd].fields, dataToAdd],
				},
			};
		case actionTypes.DELETE_SETTING_FIELD:
			const settingsCategoryToDelete = action.payload
				.category as SettingsCategories;
			const { deleteId } = action.payload;
			return {
				...state,
				[settingsCategoryToDelete]: {
					...state[settingsCategoryToDelete],
					fields: state[settingsCategoryToDelete].fields.filter(
						field => field._id !== deleteId
					),
				},
			};
		case actionTypes.UPDATE_SETTING_FIELD:
			return { ...state };
		case actionTypes.SET_SETTINGS_FIELDS:
			const { customers, devices, repairs } = action.payload;
			return {
				customers: {
					...state.customers,
					fields: customers,
				},
				repairs: {
					...state.repairs,
					fields: repairs,
				},
				devices: {
					...state.devices,
					fields: devices,
				},
			};

		default:
			return { ...state };
	}
};

export default settingsReducer;
