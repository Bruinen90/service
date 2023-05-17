import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as watcherTypes from '../../store/sagas/watcherTypes';

//Styles
import * as Styled from './stylesNewRepairSummary';

//Types
import { State } from '../../types/State';
import { Button } from '@mui/material';
import RepairSummary from '../RepairSummary/RepairSummary';
interface NewRepairSummaryProps {
	goToNextStep: () => void;
}

const NewRepairSummary: React.FC<NewRepairSummaryProps> = () => {
	const dispatch = useDispatch();
	const newRepairData = useSelector((state: State) => state.newRepair);

	return (
		<Styled.Wrapper>
			<RepairSummary repairId={'123'} />
			{/* <Button onClick={} variant='contained'>
				Zapisz naprawę
			</Button> */}
		</Styled.Wrapper>
	);
};

export default NewRepairSummary;
