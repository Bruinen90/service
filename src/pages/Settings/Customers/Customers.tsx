import React, { useState } from 'react';

//Styles
import * as Styled from './stylesCustomers';
import { Typography } from '@material-ui/core';

//Types
interface CustomersProps {}

const Customers: React.FC<CustomersProps> = () => {
	const [] = useState();
	return (
		<Styled.Wrapper>
			<Typography variant='h1'>Klienci</Typography>
		</Styled.Wrapper>
	);
};
export default Customers;
