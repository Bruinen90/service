import React, { useState } from 'react';

// MUI
import { Typography } from '@material-ui/core';

//Styles
import * as Styled from './stylesNewRepair';

//Types
interface NewRepairProps {}

const NewRepair: React.FC<NewRepairProps> = () => {
	const [] = useState();
	return (
		<Styled.Wrapper>
			<Typography variant='h1'>Nowa naprawa</Typography>
		</Styled.Wrapper>
	);
};
export default NewRepair;
