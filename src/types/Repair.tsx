export type NewRepairTab = 'customer' | 'device' | 'repair' | 'summary';

export type TabsArr = Array<{
	label: NewRepairTab;
	description: String;
}>;

export type RepairStatus =
	| 'new'
	| 'waitingForParts'
	| 'waitingForDecision'
	| 'done';

export interface FetchedRepair {
	repairData: { [key: string]: string | boolean | undefined };
	customer: {
		_id: string;
		phoneNumer: string;
		email?: string;
		[key: string]: string | boolean | undefined;
	};
	device: {
		_id: string;
		[key: string]: any;
	};
	_id: string;
}
