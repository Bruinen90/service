import React, { useState } from 'react';

//Styles
import * as Styled from './stylesCustomers';
import { Typography } from '@material-ui/core';
import SettingsField from '../../../components/SettingsField/SettingsField';

//Types
interface CustomersProps {}

const Customers: React.FC<CustomersProps> = () => {
	const [] = useState();
	return (
		<Styled.Wrapper>
			<Typography variant='h3'>Ustawienia klientów</Typography>
			<SettingsField name='Imię' type='text' />
		</Styled.Wrapper>
	);
};
export default Customers;
