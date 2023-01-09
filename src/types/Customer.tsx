export interface ICustomer {
	phoneNumber: string;
	[key: string]: string | number | boolean | Date;
}
