import React, { useState } from 'react';

//Styles
import * as Styled from './stylesGeneral';

// MUI
import { Typography } from '@mui/material';

// Components
import ServicemanEditor from '../../../components/ServicemanEditor/ServicemanEditor';

//Types
interface GeneralProps {}

const General: React.FC<GeneralProps> = () => {
	const [] = useState();
	return (
		<Styled.Wrapper>
			<Typography variant='h1'>Ustawienia ogólne</Typography>
			<Typography variant='h2'>Nowy serwisant</Typography>
			<ServicemanEditor />
		</Styled.Wrapper>
	);
};
export default General;
