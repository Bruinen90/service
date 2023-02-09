import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as watcherTypes from '../../store/sagas/watcherTypes';

//Styles
import * as Styled from './stylesRepairs';

// MUI
import { Typography } from '@mui/material';

//Types
interface RepairsProps {}

const Repairs: React.FC<RepairsProps> = () => {
	const [] = useState();

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch({ type: watcherTypes.WATCH_GET_ALL_REPAIRS });
	}, [dispatch]);

	return (
		<Styled.Wrapper>
			<Typography variant='h1'>Naprawy</Typography>
		</Styled.Wrapper>
	);
};
export default Repairs;
