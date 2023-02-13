import { Field } from './Settings';
import { ICustomer } from './Customer';
import { Device } from './Device';
import { FetchedRepair, RepairStatus } from './Repair';
export interface State {
	company: Company;
	settings: Settings;
	loading: Loaders;
	newRepair: NewRepair;
	repairs: FetchedRepair[];
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
				category: 'customers',
			},
			{
				_id: 'surname',
				name: 'Nazwisko',
				type: 'text',
				category: 'customers',
			},
		],
	},
	repairs: {
		fields: [
			{
				_id: 'price',
				name: 'Cena',
				type: 'text',
				category: 'repairs',
			},
		],
	},
	devices: {
		fields: [
			{
				_id: 'serial',
				name: 'Numer seryjny',
				type: 'text',
				category: 'devices',
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
	device: Device;
	problem: Device;
}

export interface Repair extends NewRepair {
	status: RepairStatus;
	addedDate: Date;
}
