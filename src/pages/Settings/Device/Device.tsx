import React, { useState } from 'react';

//Styles
import * as Styled from './stylesDevice';
import { Typography } from '@mui/material';
import SettingsFieldsEditor from '../../../components/SettingsFieldsEditor/SettingsFieldsEditor';

//Types
interface DeviceProps {}

const Device: React.FC<DeviceProps> = () => {
	const [] = useState();
	return (
		<Styled.Wrapper>
			<Typography variant='h3'>Ustawienia urządzenia</Typography>
			<SettingsFieldsEditor category='devices' />
		</Styled.Wrapper>
	);
};
export default Device;
