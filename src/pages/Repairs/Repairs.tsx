import React, { useState } from 'react';

//Styles
import * as Styled from './stylesRepairs';

// MUI
import { Typography } from '@mui/material';

//Types
interface RepairsProps {}

const Repairs: React.FC<RepairsProps> = () => {
	const [] = useState();
	return (
		<Styled.Wrapper>
			<Typography variant='h1'>Naprawy</Typography>
		</Styled.Wrapper>
	);
};
export default Repairs;
