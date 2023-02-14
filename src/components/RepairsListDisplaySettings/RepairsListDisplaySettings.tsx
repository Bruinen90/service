import { Typography } from '@mui/material';
import React, { useState } from 'react';

//Styles
import * as Styled from './stylesRepairsListDisplaySettings';

//Types
interface RepairsListDisplaySettingsProps {}

const RepairsListDisplaySettings: React.FC<
	RepairsListDisplaySettingsProps
> = () => {
	const [] = useState();
	return (
		<Styled.Wrapper>
			<Typography variant='h3'>Ustawienia wyświetlania</Typography>
		</Styled.Wrapper>
	);
};
export default RepairsListDisplaySettings;
