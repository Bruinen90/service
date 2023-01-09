import React from 'react';

//Styles
import * as Styled from './stylesLogo';
import { Typography } from '@mui/material';

//Types
interface LogoProps {
	size?: 'small' | 'medium' | 'big';
	variant?: 'dark' | 'light' | 'outlined';
}

const Logo: React.FC<LogoProps> = () => (
	<Styled.Wrapper>
		<Typography variant='caption'>ProService</Typography>
	</Styled.Wrapper>
);

export default Logo;
