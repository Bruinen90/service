import React, { useState } from 'react';

//Styles
import * as Styled from './stylesSettings';

// MUI
import { Typography } from '@material-ui/core';

//Types
interface SettingsProps {}

const Settings: React.FC<SettingsProps> = () => {
	const [] = useState();
	return (
		<Styled.Wrapper>
			<Typography variant='h1'>Ustawienia</Typography>
		</Styled.Wrapper>
	);
};
export default Settings;
