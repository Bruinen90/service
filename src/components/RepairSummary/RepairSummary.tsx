import React, { useState } from 'react';
import { useSelector } from 'react-redux';

//Styles
import * as Styled from './stylesRepairSummary';
import { State } from '../../types/State';

//Types
interface RepairSummaryProps {
	repairId: string;
}

const RepairSummary: React.FC<RepairSummaryProps> = ({ repairId }) => {
	const [] = useState();
	const repairData = useSelector((state: State) => state.repairs).find(
		repair => repair._id === repairId
	);

	console.log(repairData);

	return <Styled.Wrapper></Styled.Wrapper>;
};
export default RepairSummary;
