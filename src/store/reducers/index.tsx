import { combineReducers } from 'redux';

import settings from './settingsReducer';
import company from './companyReducer';

export default combineReducers({ settings, company });
