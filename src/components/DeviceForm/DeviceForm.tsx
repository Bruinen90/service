import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';
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
	const dispatch = useDispatch();

	const deviceFields = useSelector(
		(state: State) => state.settings.devices.fields
	);

	const deviceData = useSelector((state: State) => state.newRepair.device);

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
	// const [deviceData, setDeviceData] = useState(defaults);

	const handleUpdateDeviceData = (
		event: React.ChangeEvent<HTMLInputElement> | any
	) => {
		const input = event.target;
		dispatch({
			type: actionTypes.SET_DEVICE_DATA,
			payload: {
				[input.name]:
					input.type === 'checkbox' ? input.checked : input.value,
			},
		});
	};

	const handleAddDevice = () => {
		goToNextStep();
	};
	return (
		<Styled.Wrapper>
			<form onSubmit={handleAddDevice}>
				<FormGroup>
					{deviceFields.map(field => {
						const fieldNameNormalized = removeSpaces(field.name);
						switch (field.type) {
							case 'text':
								return (
									<TextField
										name={fieldNameNormalized}
										label={field.name}
										key={field._id}
										onChange={handleUpdateDeviceData}
										value={
											deviceData[fieldNameNormalized] ||
											''
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
													(deviceData[
														fieldNameNormalized
													] as boolean) || false
												}
												onChange={
													handleUpdateDeviceData
												}
												name={fieldNameNormalized}
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
											onChange={handleUpdateDeviceData}
											name={fieldNameNormalized}
											value={
												deviceData[
													fieldNameNormalized
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
				</FormGroup>
			</form>
		</Styled.Wrapper>
	);
};
export default DeviceForm;
