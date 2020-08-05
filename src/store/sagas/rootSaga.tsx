import { takeEvery, takeLatest, all } from 'redux-saga/effects';
import * as watcherTypes from './watcherTypes';

// Sagas
import { loginService } from './auth/loginService';

export default function* rootSaga() {
	yield all([
		yield takeLatest(watcherTypes.WATCH_LOGIN_SERVICE, loginService),
	]);
}
