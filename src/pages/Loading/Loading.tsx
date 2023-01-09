import React from 'react';

//Styles
import * as Styled from './stylesLoading';
import Logo from '../../components/Logo/Logo';
import { CircularProgress } from '@mui/material';

const Loading = () => (
	<Styled.Wrapper>
		<Logo />
		<CircularProgress />
	</Styled.Wrapper>
);

export default Loading;
