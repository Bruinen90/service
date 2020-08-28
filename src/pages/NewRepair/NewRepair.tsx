import React, { useState } from 'react';

// MUI
import { Typography } from '@material-ui/core';

//Styles
import * as Styled from './stylesNewRepair';
import CustomerForm from '../../components/CustomerForm/CustomerForm';

//Types
interface NewRepairProps {}

const NewRepair: React.FC<NewRepairProps> = () => {
	const [] = useState();
	return (
		<Styled.Wrapper>
			<Typography variant='h1'>Nowa naprawa</Typography>
			<CustomerForm />
		</Styled.Wrapper>
	);
};
export default NewRepair;
