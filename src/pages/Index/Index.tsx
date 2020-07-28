import React from 'react';

//Styles
import * as Styled from './stylesIndex';

// MUI
import { Typography } from '@material-ui/core';

//Types
interface IndexProps {}

const Index: React.FC<IndexProps> = () => (
	<Styled.Wrapper>
		<Typography variant='h1'>Witaj</Typography>
	</Styled.Wrapper>
);

export default Index;
