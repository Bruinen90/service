import React, { useState } from 'react';
import { useSelector } from 'react-redux';

//Styles
import * as Styled from './stylesSettingsFieldsEditor';

// Components
import SettingsField from '../SettingsField/SettingsField';

// MUI
import { Button } from '@mui/material';

//Types
import { State } from '../../types/State';
import { FieldCategory } from '../../types/Settings';

interface SettingsFieldsEditorProps {
	category: FieldCategory;
}

const SettingsFieldsEditor: React.FC<SettingsFieldsEditorProps> = ({
	category,
}) => {
	const fields = useSelector(
		(state: State) => state.settings[category].fields
	);
	const [newFieldInEdit, setNewFieldInEdit] = useState(false);

	const toggleNewField = () => {
		setNewFieldInEdit(prev => !prev);
	};

	return (
		<Styled.Wrapper>
			{!newFieldInEdit ? (
				<Button
					variant='contained'
					color='primary'
					onClick={toggleNewField}
				>
					Nowe pole
				</Button>
			) : (
				<SettingsField
					_id='new-field'
					key='new-field'
					name=''
					type='text'
					category={category}
					newField={true}
					doneEditing={toggleNewField}
				/>
			)}
			{fields.map(field => (
				<SettingsField
					_id={field._id}
					key={field._id}
					name={field.name}
					type={field.type}
					category={category}
				/>
			))}
		</Styled.Wrapper>
	);
};
export default SettingsFieldsEditor;
