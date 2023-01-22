import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as watcherTypes from '../../store/sagas/watcherTypes';
import * as actionTypes from '../../store/actions/actionTypes';
import { removeSpaces } from '../../common/functions';

//Styles
import * as Styled from './stylesCustomerForm';
import { State } from '../../types/State';
import {
	TextField,
	FormControlLabel,
	Checkbox,
	FormGroup,
	Button,
} from '@mui/material';

//Types
interface CustomerFormProps {
	goToNextStep: () => void;
}

const CustomerForm: React.FC<CustomerFormProps> = ({ goToNextStep }) => {
	const dispatch = useDispatch();

	const customerFields = useSelector(
		(state: State) => state.settings.customers.fields
	);

	const customerData = useSelector(
		(state: State) => state.newRepair.customer
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
		defaults[removeSpaces(field.name)] = value;
	});

	const handleUpdateCustomerData = (
		event: React.ChangeEvent<HTMLInputElement> | any
	) => {
		const input = event.target;
		dispatch({
			type: actionTypes.SET_CUSTOMER_DATA,
			payload: {
				[input.name]:
					input.type === 'checkbox' ? input.checked : input.value,
			},
		});
	};

	const handleSaveCustomer = (event: React.SyntheticEvent) => {
		event.preventDefault();
		dispatch({
			type: watcherTypes.WATCH_CREATE_CUSTOMER,
			payload: { customerData },
		});
		goToNextStep();
	};
	return (
		<Styled.Wrapper>
			<form onSubmit={handleSaveCustomer}>
				<FormGroup>
					{customerFields.map(field => {
						const fieldNameNoSpaces = removeSpaces(field.name);
						switch (field.type) {
							case 'text':
								return (
									<TextField
										name={fieldNameNoSpaces}
										label={field.name}
										key={field._id}
										onChange={handleUpdateCustomerData}
										value={
											customerData[fieldNameNoSpaces] ||
											''
										}
									/>
								);
							case 'checkbox':
								return (
									<FormControlLabel
										key={field._id}
										control={
											<Checkbox
												checked={
													(customerData[
														fieldNameNoSpaces
													] as boolean) || false
												}
												onChange={
													handleUpdateCustomerData
												}
												name={fieldNameNoSpaces}
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
						onChange={handleUpdateCustomerData}
						value={customerData.phoneNumber}
					/>
					<Button type='submit'>Zapisz</Button>
				</FormGroup>
			</form>
		</Styled.Wrapper>
	);
};
export default CustomerForm;
