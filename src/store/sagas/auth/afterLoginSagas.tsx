import { fetchSettingsFields } from '../settings/fetchSettingsFields';

export function* afterLoginSagas() {
	yield fetchSettingsFields();
}
