import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
	Checkbox,
	InputLabel,
	MenuItem,
	FormControl,
	Select,
	FormControlLabel,
	FormGroup,
	TextField,
} from '@mui/material';
import { removeSpaces } from '../../common/functions';

//Styles
import * as Styled from './stylesDeviceForm';

//Types
import { State } from '../../types/State';
interface DeviceFormProps {
	goToNextStep: () => void;
}

const DeviceForm: React.FC<DeviceFormProps> = ({ goToNextStep }) => {
	const deviceFields = useSelector(
		(state: State) => state.settings.devices.fields
	);

	interface DeviceFields {
		[key: string]: string | number | boolean;
	}

	const defaults: DeviceFields = {};
	deviceFields.forEach(field => {
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
	const [deviceData, setDeviceData] = useState(defaults);

	const handleCheckboxChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const input = event.target;
		setDeviceData(prev => ({
			...prev,
			[input.name]: input.checked,
		}));
	};

	const handleChangeTextField = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const input = event.target;
		setDeviceData(prev => ({ ...prev, [input.name]: input.value }));
	};

	const handleChangeRadioField = (event: any) => {
		const input = event.target;
		setDeviceData(prev => ({ ...prev, [input.name]: input.value }));
	};

	const handleAddDevice = () => {
		goToNextStep();
	};
	return (
		<Styled.Wrapper>
			<form onSubmit={handleAddDevice}>
				<FormGroup>
					{deviceFields.map(field => {
						switch (field.type) {
							case 'text':
								return (
									<TextField
										name={removeSpaces(field.name)}
										label={field.name}
										key={field._id}
										onChange={handleChangeTextField}
									/>
								);
							case 'checkbox':
								return (
									<FormControlLabel
										key={field._id}
										control={
											<Checkbox
												checked={
													deviceData[
														field._id
													] as boolean
												}
												onChange={handleCheckboxChange}
												name={removeSpaces(field.name)}
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
											onChange={handleChangeRadioField}
											name={removeSpaces(field.name)}
											defaultValue={field.radios![0]}
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
				</FormGroup>
			</form>
		</Styled.Wrapper>
	);
};
export default DeviceForm;
