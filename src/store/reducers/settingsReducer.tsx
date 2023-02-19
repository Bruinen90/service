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
			const { _id } = action.payload.data;
			const settingsCategoryToUpdate = action.payload
				.category as SettingsCategories;
			const fieldsToUpdate = { ...state }[
				settingsCategoryToUpdate
			].fields.map(field => {
				if (field._id && field._id === _id) {
					return { ...action.payload.data };
				} else {
					return field;
				}
			});
			// return { ...state };
			return {
				...state,
				[settingsCategoryToUpdate]: { fields: fieldsToUpdate },
			};
		case actionTypes.SET_SETTINGS_FIELDS:
			const { customers, devices, repairs } = action.payload;
			return {
				...state,
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
		case actionTypes.ADD_NEW_SERVICEMAN:
			if (state.servicemen && state.servicemen.length > 0) {
				return {
					...state,
					servicemen: [...state.servicemen, action.payload],
				};
			} else {
				return {
					...state,
					servicemen: [action.payload],
				};
			}
		case actionTypes.SET_SERVICEMEN:
			return { ...state, servicemen: action.payload };
		default:
			return { ...state };
	}
};

export default settingsReducer;
