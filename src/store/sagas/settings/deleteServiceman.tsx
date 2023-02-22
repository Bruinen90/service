import axios from 'axios';
import { put } from 'redux-saga/effects';
import * as actionTypes from '../../actions/actionTypes';

export function* deleteServiceman(action: {
	type: string;
	payload: string;
}): any {
	yield put({ type: actionTypes.DELETE_SERVICEMAN, payload: action.payload });
}
