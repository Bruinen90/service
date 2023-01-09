import { Field } from './Settings';
import { ICustomer } from './Customer';
export interface State {
	company: Company;
	settings: Settings;
	loading: Loaders;
	newRepair: NewRepair;
}

export interface Action {
	type: string;
	payload?: any;
}

export interface Company {
	_id?: string;
	name?: string;
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

export type LoadingCategories = keyof Loaders;

export interface LoadingData {
	isLoading: boolean;
	recordId?: string;
}

export interface Loaders {
	general?: LoadingData;
	newRecord?: LoadingData[];
	editRecord?: LoadingData[];
	fetchData?: LoadingData[];
}

export interface NewRepair {
	customer: ICustomer;
}
