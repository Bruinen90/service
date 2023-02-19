export type FieldType = 'text' | 'radio' | 'checkbox';

export type FieldCategory = 'customers' | 'repairs' | 'devices';

export interface Field {
	_id: string;
	name: string;
	type: FieldType;
	radios?: string[];
	required?: boolean;
	category: FieldCategory;
}

export interface CreatedServiceman {
	name: string;
	email?: string;
	phonenumber?: string;
}

export interface FetchedServiceman extends CreatedServiceman {
	_id: string;
}
