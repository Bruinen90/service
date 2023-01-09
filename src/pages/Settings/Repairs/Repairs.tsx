import React from 'react';

//Styles
import * as Styled from './stylesRepairs';

// MUI
import { Typography } from '@mui/material';
import SettingsFieldsEditor from '../../../components/SettingsFieldsEditor/SettingsFieldsEditor';

const Repairs = () => {
	return (
		<Styled.Wrapper>
			<Typography variant='h3'>Ustawienia napraw</Typography>
			<SettingsFieldsEditor category='repairs' />
		</Styled.Wrapper>
	);
};
export default Repairs;
