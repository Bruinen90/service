import React from 'react';

//Styles
import * as Styled from './stylesCustomers';
import { Typography } from '@mui/material';
import SettingsFieldsEditor from '../../../components/SettingsFieldsEditor/SettingsFieldsEditor';

//Types
interface CustomersProps {}

const Customers: React.FC<CustomersProps> = () => {
	return (
		<Styled.Wrapper>
			<Typography variant='h3'>Ustawienia klientów</Typography>
			<SettingsFieldsEditor category='customers' />
		</Styled.Wrapper>
	);
};
export default Customers;
