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
import InputWrapper from '../InputWrapper/InputWrapper';

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
	};
	return (
		<Styled.Wrapper>
			<form onSubmit={handleSaveCustomer}>
				<FormGroup>
					{customerFields.map((field, inputIndex) => {
						const fieldNameNoSpaces = removeSpaces(field.name);
						switch (field.type) {
							case 'text':
								return (
									<InputWrapper key={field._id}>
										<TextField
											autoFocus={inputIndex === 0}
											name={fieldNameNoSpaces}
											label={field.name}
											key={field._id}
											onChange={handleUpdateCustomerData}
											value={
												customerData[
													fieldNameNoSpaces
												] || ''
											}
										/>
									</InputWrapper>
								);
							case 'checkbox':
								return (
									<InputWrapper key={field._id}>
										<FormControlLabel
											key={field._id}
											control={
												<Checkbox
													autoFocus={inputIndex === 0}
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
									</InputWrapper>
								);
						}
					})}
					<InputWrapper>
						<TextField
							name='phoneNumber'
							label='Numer telefonu'
							key='phoneNumber'
							onChange={handleUpdateCustomerData}
							value={customerData.phoneNumber}
						/>
					</InputWrapper>
				</FormGroup>
			</form>
			<Button variant='outlined' onClick={handleSaveCustomer}>
				Dodaj tylko klienta
			</Button>
			<Button variant='contained' onClick={goToNextStep}>
				Dalej
			</Button>
		</Styled.Wrapper>
	);
};
export default CustomerForm;
