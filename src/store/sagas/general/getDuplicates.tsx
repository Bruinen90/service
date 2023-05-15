import axios from 'axios';
import { put } from 'redux-saga/effects';
import * as actionTypes from '../../actions/actionTypes';

export function* getDuplicates (action: {type: string; payload: any}) {
    try {
        const response = yield axios.get('')
    } catch (err) {
        console.log(err)
    }
}  