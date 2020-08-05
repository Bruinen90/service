import { Field } from './Settings';
export interface State {
	company: Company;
	settings: Settings;
}

export interface Action {
	type: string;
	payload?: any;
}

export interface Company {
	_id: string;
	name: string;
}

export type SettingsCategories = 'repairs' | 'customers' | 'devices';

export interface Settings {
	customers: {
		fields: Field[];
	};
	repairs: {
		fields: Field[];
	};
	devices: {
		fields: Field[];
	};
}

export const DEFAULT_SETTINGS: Settings = {
	customers: {
		fields: [
			{
				_id: 'name',
				name: 'Imię',
				type: 'text',
			},
			{
				_id: 'surname',
				name: 'Nazwisko',
				type: 'text',
			},
			{
				_id: 'phone',
				name: 'Numer telefonu',
				type: 'text',
			},
			{
				_id: 'email',
				name: 'Adres email',
				type: 'text',
			},
		],
	},
	repairs: {
		fields: [
			{
				_id: 'price',
				name: 'Cena',
				type: 'text',
			},
		],
	},
	devices: {
		fields: [
			{
				_id: 'serial',
				name: 'Numer seryjny',
				type: 'text',
			},
		],
	},
};
