import { Device } from './Device';

export interface ICustomer {
	phoneNumber: string;
	devices?: Device[];
	[key: string]: any;
}
