import React, { useState } from 'react';

//Styles
import * as Styled from './stylesGeneral';

// MUI
import { Typography } from '@material-ui/core';

//Types
interface GeneralProps {}

const General: React.FC<GeneralProps> = () => {
	const [] = useState();
	return (
		<Styled.Wrapper>
			<Typography variant='h1'>Ustawienia ogólne</Typography>
		</Styled.Wrapper>
	);
};
export default General;
