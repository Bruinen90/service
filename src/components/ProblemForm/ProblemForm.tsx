import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as watcherTypes from '../../store/sagas/watcherTypes';
import * as actionTypes from '../../store/actions/actionTypes';
import { removeSpaces } from '../../common/functions';

//Styles
import * as Styled from './stylesProblemForm';
import { State } from '../../types/State';
import {
	TextField,
	FormControlLabel,
	Checkbox,
	FormGroup,
	Button,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
} from '@mui/material';

//Types
interface ProblemFormProps {
	goToNextStep: () => void;
}

const ProblemForm: React.FC<ProblemFormProps> = ({ goToNextStep }) => {
	const dispatch = useDispatch();

	const problemFields = useSelector(
		(state: State) => state.settings.repairs.fields
	);

	const problemData = useSelector((state: State) => state.newRepair.problem);

	interface CustomerFields {
		phoneNumber: string;
		[key: string]: string | number | boolean;
	}
	const defaults: CustomerFields = {
		phoneNumber: '',
	};
	problemFields.forEach(field => {
		let value;
		switch (field.type) {
			case 'checkbox':
				value = false;
				break;
			case 'radio':
				value = field.radios![0];
				break;
			default:
				value = '';
				break;
		}
		defaults[removeSpaces(field.name)] = value;
	});

	const handleUpdateProblemData = (
		event: React.ChangeEvent<HTMLInputElement> | any
	) => {
		const input = event.target;
		dispatch({
			type: actionTypes.SET_PROBLEM_DATA,
			payload: {
				[input.name]:
					input.type === 'checkbox' ? input.checked : input.value,
			},
		});
	};

	const handleSaveCustomer = (event: React.SyntheticEvent) => {
		// event.preventDefault();
		// dispatch({
		// 	type: watcherTypes.WATCH_CREATE_CUSTOMER,
		// 	payload: { customerData },
		// });
		// goToNextStep();
	};
	return (
		<Styled.Wrapper>
			<form onSubmit={handleSaveCustomer}>
				<FormGroup>
					{problemFields.map(field => {
						const fieldNameNoSpaces = removeSpaces(field.name);
						switch (field.type) {
							case 'text':
								return (
									<TextField
										name={fieldNameNoSpaces}
										label={field.name}
										key={field._id}
										onChange={handleUpdateProblemData}
										value={
											problemData[fieldNameNoSpaces] || ''
										}
									/>
								);
							case 'checkbox':
								return (
									<FormControlLabel
										key={field._id}
										control={
											<Checkbox
												checked={
													problemData[
														fieldNameNoSpaces
													] as boolean
												}
												onChange={
													handleUpdateProblemData
												}
												name={fieldNameNoSpaces}
											/>
										}
										label={field.name}
									/>
								);
							case 'radio':
								return (
									<FormControl key={field._id}>
										<InputLabel id={field._id + '_label'}>
											{field.name}
										</InputLabel>
										<Select
											labelId={field._id + '_label'}
											id={field._id}
											label={field.name}
											onChange={handleUpdateProblemData}
											name={fieldNameNoSpaces}
											defaultValue={field.radios![0]}
											value={
												problemData[
													fieldNameNoSpaces
												] || field.radios![0]
											}
										>
											{field.radios!.map(option => (
												<MenuItem
													key={option}
													value={option}
												>
													{option}
												</MenuItem>
											))}
										</Select>
									</FormControl>
								);
						}
					})}
					<Button type='submit'>Zapisz</Button>
				</FormGroup>
			</form>
		</Styled.Wrapper>
	);
};
export default ProblemForm;
