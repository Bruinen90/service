import React, { useState } from 'react';

//Styles
import * as Styled from './stylesGeneral';

// MUI
import { Typography } from '@mui/material';

// Components
import ServicemanEditor from '../../../components/ServicemanEditor/ServicemanEditor';
import ServicemenList from '../../../components/ServicemenList/ServicemenList';

//Types
interface GeneralProps {}

const General: React.FC<GeneralProps> = () => {
	const [] = useState();
	return (
		<Styled.Wrapper>
			<Typography variant='h2'>Ustawienia ogólne</Typography>
			<Typography variant='h4'>Nowy serwisant</Typography>
			<ServicemanEditor />
			<ServicemenList />
		</Styled.Wrapper>
	);
};
export default General;
