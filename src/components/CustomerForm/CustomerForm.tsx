import React, { useState } from 'react';
import { useSelector } from 'react-redux';

//Styles
import * as Styled from './stylesCustomerForm';
import { State } from '../../types/State';
import {
	TextField,
	FormControlLabel,
	Checkbox,
	FormGroup,
	Typography,
	Button,
} from '@material-ui/core';

//Types
interface CustomerFormProps {}

const CustomerForm: React.FC<CustomerFormProps> = () => {
	const customerFields = useSelector(
		(state: State) => state.settings.customers.fields
	);
	interface CustomerFields {
		phoneNumber: string;
		[key: string]: string | number | boolean;
	}
	const defaults: CustomerFields = {
		phoneNumber: '',
	};
	customerFields.forEach(field => {
		let value;
		switch (field.type) {
			case 'checkbox':
				value = false;
				break;
			case 'radio':
				value = field.radios![0];
				break;
			default:
				value = '';
				break;
		}
		defaults[field._id] = value;
	});
	const [customerData, setCustomerData] = useState(defaults);

	const handleCheckboxChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const input = event.target;
		setCustomerData(prev => ({
			...prev,
			[input.name]: input.checked,
		}));
	};

	const handleChangeTextField = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const input = event.target;
		setCustomerData(prev => ({ ...prev, [input.name]: input.value }));
	};

	const handleSaveCustomer = (event: React.SyntheticEvent) => {
		event.preventDefault();
		console.log(customerData);
	};
	return (
		<Styled.Wrapper>
			<Typography variant='h4'>Klient</Typography>
			<form onSubmit={handleSaveCustomer}>
				<FormGroup>
					{customerFields.map(field => {
						switch (field.type) {
							case 'text':
								return (
									<TextField
										name={field._id}
										label={field.name}
										key={field._id}
										onChange={handleChangeTextField}
									/>
								);
							case 'checkbox':
								return (
									<FormControlLabel
										key={field._id}
										control={
											<Checkbox
												checked={
													customerData[
														field._id
													] as boolean
												}
												onChange={handleCheckboxChange}
												name={field._id}
											/>
										}
										label={field.name}
									/>
								);
						}
					})}
					<TextField
						name='phoneNumber'
						label='Numer telefonu'
						key='phoneNumber'
						onChange={handleChangeTextField}
					/>
					<Button type='submit'>Zapisz</Button>
				</FormGroup>
			</form>
		</Styled.Wrapper>
	);
};
export default CustomerForm;
