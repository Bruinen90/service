import React from 'react';

//Styles
import * as Styled from './stylesSettingsRow';

//Types
import { FieldType } from '../../types/Settings';
import { Typography, IconButton } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

interface SettingsRowProps {
	name: string;
	type: FieldType;
	clickedEdit: () => void;
	clickedDelete: () => void;
}

const SettingsRow: React.FC<SettingsRowProps> = ({
	name,
	type,
	clickedEdit,
	clickedDelete,
}) => {
	let typeOutput: string;
	switch (type) {
		case 'checkbox':
			typeOutput = 'pole tak/nie';
			break;
		case 'radio':
			typeOutput = 'pole wyboru';
			break;
		case 'text':
			typeOutput = 'dowolny tekst';
			break;
		default:
			typeOutput = 'BŁĄD';
	}
	return (
		<Styled.Wrapper>
			<Typography>{name}</Typography>
			<Typography>{typeOutput}</Typography>
			<div>
				<IconButton onClick={clickedEdit}>
					<Edit />
				</IconButton>
				<IconButton onClick={clickedDelete}>
					<Delete />
				</IconButton>
			</div>
		</Styled.Wrapper>
	);
};

export default SettingsRow;
