import React, { useState } from 'react';

// MUI
import { Typography } from '@mui/material';

//Styles
import * as Styled from './stylesNewRepair';
import CustomerForm from '../../components/CustomerForm/CustomerForm';

// Components
import NewRepairStepper from '../../components/NewRepairStepper/NewRepairStepper';

//Types
import { NewRepairTab, TabsArr } from '../../types/Repair';
import DeviceForm from '../../components/DeviceForm/DeviceForm';
import ProblemForm from '../../components/ProblemForm/ProblemForm';

interface NewRepairProps {}

const STEPS: TabsArr = [
	{
		label: 'customer',
		description: 'Klient',
	},
	{
		label: 'device',
		description: 'Sprzęt',
	},
	{
		label: 'repair',
		description: 'Usterka',
	},
	{
		label: 'summary',
		description: 'Podsumowanie',
	},
];

const NewRepair: React.FC<NewRepairProps> = () => {
	const [activeTab, setActiveTab] = useState(0);

	const goToNextStep = () => {
		setActiveTab(activeTab + 1);
	};

	const goToPreviousStep = () => {
		setActiveTab(activeTab - 1);
	};

	const goToStep = (tabNumber: number) => {
		setActiveTab(tabNumber);
	};

	let tabToShow;

	switch (activeTab) {
		case 0:
			tabToShow = <CustomerForm goToNextStep={goToNextStep} />;
			break;
		case 1:
			tabToShow = <DeviceForm goToNextStep={goToNextStep} />;
			break;
		case 2:
			tabToShow = <ProblemForm goToNextStep={goToNextStep} />;
			break;
		case 3:
			break;
		default:
			throw new Error(
				'Some problem with activeTab Navigation in NewRepairPage'
			);
	}
	return (
		<Styled.Wrapper>
			<Typography variant='h1'>Nowa naprawa</Typography>
			<NewRepairStepper
				activeStep={activeTab}
				steps={STEPS}
				goToStep={goToStep}
			/>
			{tabToShow}
		</Styled.Wrapper>
	);
};
export default NewRepair;
