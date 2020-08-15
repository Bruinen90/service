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
} from '@material-ui/core';

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
	radios: string[];
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

	const handleAddNewRadio = () => {
		setFormData(prev => ({
			...prev,
			radios: [...prev.radios, ''],
		}));
	};

	const handleRemoveRadio = (index: number) => {
		setFormData(prev => {
			const newRadios = [...prev.radios];
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
			const newRadios = [...prev.radios];
			newRadios[radioIndex] = radioInput.value;
			return {
				...prev,
				radios: newRadios,
			};
		});
	};

	const handleSubmit = () => {
		const { name, type, radios } = formData;
		clickedSave({ name: name.value, type: type.value, radios });
	};
	return (
		<Styled.Wrapper>
			<form onSubmit={handleSubmit}>
				<CardContent>
					<Typography variant='h4'>Tworzenie pola</Typography>
					<FormControl error={false}>
						<InputLabel>Etykieta pola</InputLabel>
						<Input
							name='name'
							defaultValue={name}
							onChange={handleUpdateForm}
						/>
						<FormHelperText>
							Etykieta musi zawierać przynajmniej 1 oraz
							maksymalnie 35 znaków
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
							{formData.radios.map((radio, index) => (
								<Styled.RadioRow key={index}>
									<TextField
										label='Wartość pola'
										inputProps={{ radioindex: index }}
										value={formData.radios[index]}
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
