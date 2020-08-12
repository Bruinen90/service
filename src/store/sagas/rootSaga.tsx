import { takeEvery, takeLatest, all } from 'redux-saga/effects';
import * as watcherTypes from './watcherTypes';

// Sagas
import { loginService } from './auth/loginService';
import { autoLogin } from './auth/autoLogin';
import { createSettingsField } from './settings/createSettingsField';

export default function* rootSaga() {
	yield all([
		yield takeLatest(watcherTypes.WATCH_LOGIN_SERVICE, loginService),
		yield takeLatest(watcherTypes.WATCH_AUTO_LOGIN, autoLogin),
		yield takeLatest(
			watcherTypes.WATCH_CREATE_SETTINGS_FIELD,
			createSettingsField
		),
	]);
}
