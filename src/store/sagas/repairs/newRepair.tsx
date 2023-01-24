import { NewRepair } from '../../../types/State';

export function* newRepair(action: { type: string; payload: NewRepair }) {
	console.log('new REpair', action.payload);
}
