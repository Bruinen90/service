import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

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
} from '@material-ui/core';

// Types
import { FieldType } from '../../types/Settings';
interface SettingsInEditProps {
	name?: string;
	type?: FieldType;
	clickedCancel: () => void;
	clickedSave: (dataCopy: any) => void;
}

const SettingsInEdit: React.FC<SettingsInEditProps> = ({
	name,
	type,
	clickedSave,
	clickedCancel,
}) => {
	const [header, setHeader] = useState(name || 'Nowe pole');

	// use-form-hook
	const { register, handleSubmit, watch, errors } = useForm();

	const watchFieldType = watch(['type-text', 'type-radio', 'type-checkbox']);

	const onSubmit = (data: any) => {
		const dataCopy = { ...data };
		Object.keys(dataCopy).forEach(key => {
			if (key.startsWith('type-')) {
				if (dataCopy[key] !== '') {
					dataCopy.type = dataCopy[key];
				}
				delete dataCopy[key];
			}
		});

		clickedSave(dataCopy);
	};
	return (
		<Styled.Wrapper>
			<form onSubmit={handleSubmit(onSubmit)}>
				<CardContent>
					<Typography variant='h4'>{header}</Typography>
					<FormControl error={errors.fieldLabel !== undefined}>
						<InputLabel>Etykieta pola</InputLabel>
						<Input
							inputRef={register({
								required: true,
								maxLength: 35,
							})}
							name='fieldLabel'
							defaultValue={name}
						/>
						<FormHelperText>
							Etykieta musi zawierać przynajmniej 1 oraz
							maksymalnie 35 znaków
						</FormHelperText>
					</FormControl>
					{/* <input type='text' ref={register} /> */}
					<Typography variant='h5'>Typ pola</Typography>
					<RadioGroup name='fieldType'>
						<FormControlLabel
							value='text'
							name='type-text'
							inputRef={register}
							control={<Radio />}
							label='Dowolna wartość tekstowa'
						/>
						<FormControlLabel
							value='radio'
							name='type-radio'
							inputRef={register}
							control={<Radio />}
							label='Wybór z listy'
						/>{' '}
						<FormControlLabel
							value='checkbox'
							name='type-checkbox'
							inputRef={register}
							control={<Radio />}
							label='Wybór tak/nie'
						/>
					</RadioGroup>
					{watchFieldType['type-radio'] === 'radio' && (
						<Typography>Radio!!</Typography>
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
