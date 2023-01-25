import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as watcherTypes from '../../store/sagas/watcherTypes';

//Styles
import * as Styled from './stylesNewRepairSummary';

//Types
import { State } from '../../types/State';
import { Button } from '@mui/material';
interface NewRepairSummaryProps {
	goToNextStep: () => void;
}

const NewRepairSummary: React.FC<NewRepairSummaryProps> = () => {
	const dispatch = useDispatch();
	const newRepairData = useSelector((state: State) => state.newRepair);

	const handleSubmitNewRepair = () => {
		dispatch({
			type: watcherTypes.WATCH_SUBMIT_NEW_REPAIR,
			payload: newRepairData,
		});
	};
	return (
		<Styled.Wrapper>
			<Button onClick={handleSubmitNewRepair} variant='contained'>
				Zapisz naprawę
			</Button>
		</Styled.Wrapper>
	);
};

export default NewRepairSummary;
