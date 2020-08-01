export type FieldType = 'text' | 'radio' | 'checkbox';

export interface Field {
	_id: string;
	name: string;
	type: FieldType;
	radios?: string[];
}
