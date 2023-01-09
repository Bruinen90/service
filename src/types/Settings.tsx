export type FieldType = 'text' | 'radio' | 'checkbox';

export type FieldCategory = 'customers' | 'repairs' | 'devices';

export interface Field {
	_id: string;
	name: string;
	type: FieldType;
	radios?: string[];
}

export interface FetchedField extends Field {
	category: FieldCategory;
}
