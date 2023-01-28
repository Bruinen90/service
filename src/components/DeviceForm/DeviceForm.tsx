import React, { useEffect } from 'react';
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
	Button,
} from '@mui/material';
import { removeSpaces } from '../../common/functions';

// Components
import InputWrapper from '../InputWrapper/InputWrapper';

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

	useEffect(() => {
		Object.entries(defaults).forEach(field => {
			const [name, value] = field;
			if (deviceData[name] === undefined) {
				dispatch({
					type: actionTypes.SET_DEVICE_DATA,
					payload: { [name]: value },
				});
			}
		});
	}, []);

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

	return (
		<Styled.Wrapper>
			<form>
				<FormGroup>
					{deviceFields.map((field, inputIndex) => {
						const fieldNameNormalized = removeSpaces(field.name);
						switch (field.type) {
							case 'text':
								return (
									<InputWrapper key={field._id}>
										<TextField
											name={fieldNameNormalized}
											label={field.name}
											key={field._id}
											onChange={handleUpdateDeviceData}
											value={
												deviceData[
													fieldNameNormalized
												] || ''
											}
											autoFocus={inputIndex === 0}
										/>
									</InputWrapper>
								);
							case 'checkbox':
								return (
									<InputWrapper key={field._id}>
										<FormControlLabel
											key={field._id}
											control={
												<Checkbox
													autoFocus={inputIndex === 0}
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
									</InputWrapper>
								);
							case 'radio':
								return (
									<InputWrapper key={field._id}>
										<FormControl key={field._id}>
											<InputLabel
												id={field._id + '_label'}
											>
												{field.name}
											</InputLabel>
											<Select
												autoFocus={inputIndex === 0}
												labelId={field._id + '_label'}
												id={field._id}
												label={field.name}
												onChange={
													handleUpdateDeviceData
												}
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
									</InputWrapper>
								);
						}
					})}
				</FormGroup>
			</form>
			<Button variant='outlined'>Dodaj tylko klienta</Button>
			<Button variant='contained' onClick={goToNextStep}>
				Dalej
			</Button>
		</Styled.Wrapper>
	);
};
export default DeviceForm;
