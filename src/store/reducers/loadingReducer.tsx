import * as actionTypes from '../actions/actionTypes';

import { Action, Loaders } from '../../types/State';

export default (
	state: Loaders = { general: { isLoading: true } },
	action: Action
) => {
	switch (action.type) {
		case actionTypes.SET_LOADER:
			const { loadingCategory, isLoading, recordId } = action.payload;
			return {
				...state,
				[loadingCategory]: {
					isLoading,
					recordId,
				},
			};
		default:
			return state;
	}
};
