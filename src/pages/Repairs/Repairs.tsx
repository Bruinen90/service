import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as watcherTypes from '../../store/sagas/watcherTypes';

//Styles
import * as Styled from './stylesRepairs';

// MUI
import { Typography } from '@mui/material';

// Components
import RepairsList from '../../components/RepairsList/RepairsList';

//Types
import { State } from '../../types/State';
interface RepairsProps {}

const Repairs: React.FC<RepairsProps> = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch({ type: watcherTypes.WATCH_GET_ALL_REPAIRS });
	}, [dispatch]);

	const repairsList = useSelector((state: State) => state.repairs);
	const dataFields = useSelector((state: State) => state.settings);
	return (
		<Styled.Wrapper>
			<Typography variant='h1'>Naprawy</Typography>
			<RepairsList repairs={repairsList} dataFields={dataFields} />
		</Styled.Wrapper>
	);
};
export default Repairs;
