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
