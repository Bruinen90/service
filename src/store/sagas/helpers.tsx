import * as actionCreators from '../actions/actionCreators';

import { LoadingCategories } from '../../types/State';
import { put } from 'redux-saga/effects';

interface withLoaderParams {
	loadingCategory: LoadingCategories;
	recordId?: string;
	cb: () => void;
}

export function* withLoader({
	loadingCategory,
	recordId,
	cb,
}: withLoaderParams) {
	interface loaderParams {
		loadingCategory: LoadingCategories;
		recordId?: string;
		isLoading: boolean;
	}
	const loaderParams: loaderParams = {
		loadingCategory,
		isLoading: true,
	};
	if (recordId) {
		loaderParams.recordId = recordId;
	}
	yield put(actionCreators.setLoader(loaderParams));
	yield cb();
	yield put(actionCreators.setLoader({ ...loaderParams, isLoading: false }));
}
