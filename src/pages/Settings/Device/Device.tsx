import React, { useState } from 'react';

//Styles
import * as Styled from './stylesDevice';
import { Typography } from '@material-ui/core';

//Types
interface DeviceProps {}

const Device: React.FC<DeviceProps> = () => {
	const [] = useState();
	return (
		<Styled.Wrapper>
			<Typography variant='h1'>Ustawienia urządzenia</Typography>
		</Styled.Wrapper>
	);
};
export default Device;
