export type FieldType = 'text' | 'radio' | 'checkbox';

export type FieldCategory = 'customer' | 'repair' | 'device';

export interface Field {
	_id: string;
	name: string;
	type: FieldType;
	radios?: string[];
}

export interface FetchedField extends Field {
	category: FieldCategory;
}
