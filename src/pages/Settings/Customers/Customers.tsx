import React from 'react';
import { useSelector } from 'react-redux';

//Styles
import * as Styled from './stylesCustomers';
import { Typography } from '@material-ui/core';
import SettingsField from '../../../components/SettingsField/SettingsField';
import { State } from '../../../types/State';

//Types
interface CustomersProps {}

const Customers: React.FC<CustomersProps> = () => {
	const fields = useSelector(
		(state: State) => state.settings.customers.fields
	);

	return (
		<Styled.Wrapper>
			<Typography variant='h3'>Ustawienia klientów</Typography>
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
