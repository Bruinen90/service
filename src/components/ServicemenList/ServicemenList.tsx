import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as watcherTypes from '../../store/sagas/watcherTypes';
// MUI
import { Button, ButtonGroup, TextField, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

//Styles
import * as Styled from './stylesServicemenList';

//Types
import { State } from '../../types/State';
import { CreatedServiceman, FetchedServiceman } from '../../types/Settings';
interface EditableServiceman extends FetchedServiceman {
	inEdit: boolean;
}

const ServicemenList: React.FC = () => {
	const dispatch = useDispatch();

	const servicemenList = useSelector(
		(state: State) => state.settings.servicemen
	);

	const [currentServicemen, setCurrentServicemen] = useState<
		EditableServiceman[]
	>([]);

	useEffect(() => {
		setCurrentServicemen(
			servicemenList.map(serviceman => ({ ...serviceman, inEdit: false }))
		);
	}, [servicemenList]);

	const handleClickedEdit = ({ servicemanId }: { servicemanId: string }) => {
		setCurrentServicemen(prev =>
			prev.map(serviceman => {
				if (serviceman._id === servicemanId) {
					return { ...serviceman, inEdit: true };
				} else {
					return serviceman;
				}
			})
		);
	};

	const handleUpdateServiceman = ({
		event,
		field,
		_id,
	}: {
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
		field: keyof CreatedServiceman;
		_id: string;
	}) => {
		setCurrentServicemen(prev =>
			prev.map(serviceman => {
				if (serviceman._id === _id) {
					return { ...serviceman, [field]: event.target.value };
				} else {
					return serviceman;
				}
			})
		);
	};

	const handleClickedSave = ({
		serviceman,
	}: {
		serviceman: EditableServiceman;
	}) => {
		setCurrentServicemen(prev =>
			prev.map(prevServiceman => ({ ...prevServiceman, inEdit: false }))
		);
		dispatch({
			type: watcherTypes.WATCH_UPDATE_SERVICEMAN,
			payload: serviceman,
		});
	};

	const handleClickedDelete = ({
		servicemanId,
	}: {
		servicemanId: string;
	}) => {
		dispatch({
			type: watcherTypes.WATCH_DELETE_SERVICEMAN,
			payload: servicemanId,
		});
	};

	return (
		<Styled.Wrapper>
			<Typography variant='h4'>Lista serwisantów</Typography>
			{currentServicemen.map(serviceman => {
				if (serviceman.inEdit) {
					return (
						<Styled.Row key={serviceman._id}>
							<TextField
								value={serviceman.name}
								onChange={event =>
									handleUpdateServiceman({
										field: 'name',
										event: event,
										_id: serviceman._id,
									})
								}
							/>
							<TextField
								value={serviceman.email}
								onChange={event =>
									handleUpdateServiceman({
										field: 'email',
										event: event,
										_id: serviceman._id,
									})
								}
							/>{' '}
							<TextField
								value={serviceman.phonenumber}
								onChange={event =>
									handleUpdateServiceman({
										field: 'phonenumber',
										event: event,
										_id: serviceman._id,
									})
								}
							/>
							<ButtonGroup>
								<Button
									startIcon={<EditIcon />}
									onClick={() =>
										handleClickedSave({
											serviceman: serviceman,
										})
									}
								>
									Zapisz zmiany
								</Button>
								<Button
									onClick={() =>
										handleClickedDelete({
											servicemanId: serviceman._id,
										})
									}
									startIcon={<DeleteIcon />}
								>
									Usuń serwisanta
								</Button>
							</ButtonGroup>
						</Styled.Row>
					);
				} else {
					return (
						<Styled.Row key={serviceman._id}>
							<Typography>{serviceman.name}</Typography>
							<Typography>{serviceman.email}</Typography>
							<Typography>{serviceman.phonenumber}</Typography>
							<ButtonGroup>
								<Button
									startIcon={<EditIcon />}
									onClick={() =>
										handleClickedEdit({
											servicemanId: serviceman._id,
										})
									}
								>
									Edytuj
								</Button>
								<Button
									onClick={() =>
										handleClickedDelete({
											servicemanId: serviceman._id,
										})
									}
									startIcon={<DeleteIcon />}
								>
									Usuń serwisanta
								</Button>
							</ButtonGroup>
						</Styled.Row>
					);
				}
			})}
		</Styled.Wrapper>
	);
};

export default ServicemenList;
