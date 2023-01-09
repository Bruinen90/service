import React, { useState } from 'react';

//Styles
import * as Styled from './stylesSettingsInEdit';
import {
	Typography,
	RadioGroup,
	Radio,
	FormControlLabel,
	Button,
	FormControl,
	InputLabel,
	Input,
	FormHelperText,
	CardActions,
	CardContent,
	TextField,
} from '@mui/material';

// Types
import { FieldType } from '../../types/Settings';
interface SettingsInEditProps {
	name?: string;
	type?: FieldType;
	clickedCancel: () => void;
	clickedSave: (dataCopy: any) => void;
}

interface FormInterface {
	name: {
		value: string;
		hasError: boolean;
		touched: boolean;
	};
	type: {
		value: 'text' | 'radio' | 'checkbox';
		hasError: boolean;
		touched: boolean;
	};
	radios?: string[];
}

const SettingsInEdit: React.FC<SettingsInEditProps> = ({
	name,
	type,
	clickedSave,
	clickedCancel,
}) => {
	const [formData, setFormData] = useState<FormInterface>({
		name: {
			value: name || '',
			hasError: false,
			touched: false,
		},
		type: {
			value: type || 'text',
			hasError: false,
			touched: false,
		},
		radios: [''],
	});

	const handleUpdateForm = (event: React.ChangeEvent) => {
		const input = event.target as HTMLInputElement;
		const fieldName = input.getAttribute('name') as keyof FormInterface;
		setFormData(prev => ({
			...prev,
			[fieldName]: { value: input.value, touched: true, hasError: false },
		}));
	};

	const handleValidateTextField = (event: React.FormEvent) => {
		const input = event.target as HTMLInputElement;
		if (!input.validity.valid) {
			setFormData(prev => ({
				...prev,
				[input.name]: {
					value: input.value,
					hasError: true,
					touched: true,
				},
			}));
		} else {
			setFormData(prev => ({
				...prev,
				[input.name]: {
					value: input.value,
					hasError: false,
					touched: true,
				},
			}));
		}
	};

	const handleAddNewRadio = () => {
		setFormData(prev => ({
			...prev,
			radios: [...prev.radios!, ''],
		}));
	};

	const handleRemoveRadio = (index: number) => {
		setFormData(prev => {
			const newRadios = [...prev.radios!];
			newRadios.splice(index, 1);
			return {
				...prev,
				radios: newRadios,
			};
		});
	};

	const handleChangeRadio = (event: React.ChangeEvent) => {
		const radioInput = event.target as HTMLInputElement;
		const radioIndex = parseInt(
			radioInput.getAttribute('radioindex')!
		) as number;
		setFormData(prev => {
			const newRadios = [...prev.radios!];
			newRadios[radioIndex] = radioInput.value;
			return {
				...prev,
				radios: newRadios,
			};
		});
	};

	const handleSubmit = () => {
		const { name, type, radios } = formData;
		const dataToSend = {
			name: name.value,
			type: type.value,
			radios: radios?.filter(radio => radio !== ''), //Remove empty fields
		};
		if (dataToSend.radios?.length === 0) {
			delete dataToSend.radios;
		}
		clickedSave(dataToSend);
	};
	return (
		<Styled.Wrapper>
			<form onSubmit={handleSubmit}>
				<CardContent>
					<Typography variant='h4'>Tworzenie pola</Typography>
					<FormControl error={formData.name.hasError}>
						<InputLabel>Etykieta pola</InputLabel>
						<Input
							name='name'
							defaultValue={name}
							onChange={handleUpdateForm}
							onBlur={handleValidateTextField}
							inputProps={{
								required: true,
								minLength: 3,
								maxLength: 45,
							}}
						/>
						<FormHelperText>
							Etykieta musi zawierać od 3 do 45 znaków
						</FormHelperText>
					</FormControl>
					<Typography variant='h5'>Typ pola</Typography>
					<RadioGroup name='fieldType' onChange={handleUpdateForm}>
						<FormControlLabel
							value='text'
							name='type'
							control={
								<Radio
									checked={formData.type.value === 'text'}
								/>
							}
							label='Dowolna wartość tekstowa'
						/>
						<FormControlLabel
							value='radio'
							name='type'
							control={
								<Radio
									checked={formData.type.value === 'radio'}
								/>
							}
							label='Wybór z listy'
						/>{' '}
						<FormControlLabel
							value='checkbox'
							name='type'
							control={
								<Radio
									checked={formData.type.value === 'checkbox'}
								/>
							}
							label='Wybór tak/nie'
						/>
					</RadioGroup>
					{formData.type.value === 'radio' && (
						<>
							<Typography variant='h5'>Pola wyboru:</Typography>
							{formData.radios?.map((radio, index) => (
								<Styled.RadioRow key={index}>
									<TextField
										label='Wartość pola'
										inputProps={{
											radioindex: index,
											maxLength: 12,
										}}
										value={formData.radios![index]}
										onChange={handleChangeRadio}
									/>
									<Button
										onClick={() => handleRemoveRadio(index)}
									>
										Usuń
									</Button>
									<Button onClick={handleAddNewRadio}>
										Dodaj kolejne
									</Button>
								</Styled.RadioRow>
							))}
						</>
					)}
				</CardContent>
				<CardActions>
					<Button variant='contained' color='primary' type='submit'>
						Zapisz
					</Button>
					<Button color='secondary' onClick={clickedCancel}>
						Anuluj
					</Button>
				</CardActions>
			</form>
		</Styled.Wrapper>
	);
};
export default SettingsInEdit;
