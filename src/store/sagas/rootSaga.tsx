import { takeEvery, takeLatest, all } from 'redux-saga/effects';
import * as watcherTypes from './watcherTypes';

// Sagas
import { loginService } from './auth/loginService';
import { autoLogin } from './auth/autoLogin';
import { createSettingsField } from './settings/createSettingsField';
import { deleteSettingsField } from './settings/deleteSettingsField';
import { createCustomer } from './customers/createCustomer';
import { newRepair } from './repairs/newRepair';
import { getAllRepairs } from './repairs/getRepairs';
import { createNewServiceman } from './settings/createServiceman';
import { fetchAllServicemen } from './settings/fetchAllServicemen';
import { updateServiceman } from './settings/updateServiceman';
import { deleteServiceman } from './settings/deleteServiceman';

export default function* rootSaga(): any {
	yield all([
		yield takeLatest(watcherTypes.WATCH_LOGIN_SERVICE, loginService),
		yield takeLatest(watcherTypes.WATCH_AUTO_LOGIN, autoLogin),
		yield takeLatest(
			watcherTypes.WATCH_CREATE_SETTINGS_FIELD,
			createSettingsField
		),
		yield takeLatest(
			watcherTypes.WATCH_DELETE_SETTINGS_FIELD,
			deleteSettingsField
		),
		yield takeLatest(watcherTypes.WATCH_CREATE_CUSTOMER, createCustomer),
		yield takeLatest(watcherTypes.WATCH_SUBMIT_NEW_REPAIR, newRepair),
		yield takeLatest(watcherTypes.WATCH_GET_ALL_REPAIRS, getAllRepairs),
		yield takeLatest(
			watcherTypes.WATCH_CREATE_NEW_SERVICEMAN,
			createNewServiceman
		),
		yield takeLatest(
			watcherTypes.WATCH_FETCH_ALL_SERVICEMEN,
			fetchAllServicemen
		),
		yield takeLatest(
			watcherTypes.WATCH_UPDATE_SERVICEMAN,
			updateServiceman
		),
		yield takeLatest(
			watcherTypes.WATCH_DELETE_SERVICEMAN,
			deleteServiceman
		),
	]);
}
