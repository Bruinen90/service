import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as watcherTypes from '../../store/sagas/watcherTypes';

// MUI
import { Button, FormGroup, TextField } from '@mui/material';

//Styles
import * as Styled from './stylesServicemanEditor';
import { CreatedServiceman } from '../../types/Settings';

//Types
interface ServicemanEditorProps {}

const ServicemanEditor: React.FC<ServicemanEditorProps> = () => {
	const dispatch = useDispatch();
	const [servicemanData, setServicemanData] = useState<CreatedServiceman>({
		name: '',
		email: '',
		phonenumber: '',
	});

	const updateServicemanData = ({
		event,
		inputName,
	}: {
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
		inputName: string;
	}) => {
		const { target } = event;
		setServicemanData(prev => ({
			...prev,
			[inputName]: target.value,
		}));
	};

	const handleClickSaveServiceman = (event: React.SyntheticEvent) => {
		event.preventDefault();
		dispatch({
			type: watcherTypes.WATCH_CREATE_NEW_SERVICEMAN,
			payload: servicemanData,
		});
	};
	return (
		<Styled.Wrapper>
			<form onSubmit={handleClickSaveServiceman}>
				<FormGroup>
					<TextField
						label='Imię i nazwisko / nick serwisanta'
						name='name'
						value={servicemanData.name}
						onChange={e =>
							updateServicemanData({
								event: e,
								inputName: 'name',
							})
						}
						required
					/>
					<TextField
						label='Adres email serwisanta'
						name='email'
						value={servicemanData.email}
						onChange={e =>
							updateServicemanData({
								event: e,
								inputName: 'email',
							})
						}
					/>
					<TextField
						label='Numer telefonu serwisanta'
						name='phonenumber'
						value={servicemanData.phonenumber}
						onChange={e =>
							updateServicemanData({
								event: e,
								inputName: 'phonenumber',
							})
						}
					/>
					<Button type='submit'>Dodaj serwisanta</Button>
				</FormGroup>
			</form>
		</Styled.Wrapper>
	);
};
export default ServicemanEditor;
