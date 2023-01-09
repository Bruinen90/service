import React from 'react';

import { Stepper, Step, StepLabel } from '@mui/material';

//Styles
import * as Styled from './stylesNewRepairStepper';

// Types
import { NewRepairTab, TabsArr } from '../../types/Repair';

//Types
interface NewRepairStepperProps {
	activeStep: number;
	steps: TabsArr;
	goToStep: (step: number) => void;
}

const NewRepairStepper: React.FC<NewRepairStepperProps> = ({
	activeStep,
	steps,
	goToStep,
}) => (
	<Styled.Wrapper>
		<Stepper activeStep={activeStep}>
			{steps.map((step, index) => (
				<Step key={step.label}>
					<StepLabel
						onClick={() => goToStep(index)}
						style={{ cursor: 'pointer' }}
					>
						{step.description}
					</StepLabel>
				</Step>
			))}
		</Stepper>
	</Styled.Wrapper>
);

export default NewRepairStepper;
