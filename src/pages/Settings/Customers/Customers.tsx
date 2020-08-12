import React, { useState } from 'react';
import { useSelector } from 'react-redux';

//Styles
import * as Styled from './stylesCustomers';
import { Typography, Button } from '@material-ui/core';
import SettingsField from '../../../components/SettingsField/SettingsField';
import { State } from '../../../types/State';

//Types
interface CustomersProps {}

const Customers: React.FC<CustomersProps> = () => {
	const fields = useSelector(
		(state: State) => state.settings.customers.fields
	);

	const [newFieldInEdit, setNewFieldInEdit] = useState(false);

	const toggleNewField = () => {
		setNewFieldInEdit(prev => !prev);
	};

	return (
		<Styled.Wrapper>
			<Typography variant='h3'>Ustawienia klientów</Typography>
			{!newFieldInEdit ? (
				<Button
					variant='contained'
					color='primary'
					onClick={toggleNewField}
				>
					Nowe pole
				</Button>
			) : (
				<SettingsField
					_id='new-field'
					key='new-field'
					name='Nazwa pola'
					type='text'
					category='customers'
					newField={true}
					doneEditing={toggleNewField}
				/>
			)}
			{fields.map(field => (
				<SettingsField
					_id={field._id}
					key={field._id}
					name={field.name}
					type={field.type}
					category='customers'
				/>
			))}
		</Styled.Wrapper>
	);
};
export default Customers;
