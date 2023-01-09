import { combineReducers } from 'redux';

import settings from './settingsReducer';
import company from './companyReducer';
import loading from './loadingReducer';
import newRepair from './newRepairReducer';

export default combineReducers({ settings, company, loading, newRepair });
