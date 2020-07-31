import React, { useState } from 'react';

//Styles
import * as Styled from './stylesSettingsField';

// Components
import SettingsInEdit from '../SettingsInEdit/SettingsInEdit';
import SettingsRow from '../SettingsRow/SettingsRow';

//Types
import { FieldType } from '../../types/Settings';
interface SettingsFieldProps {
	name: string;
	type: FieldType;
}

const SettingsField: React.FC<SettingsFieldProps> = ({ name, type }) => {
	const [inEdit, setInEdit] = useState(false);

	const handleSetInEdit = () => {
		setInEdit(true);
	};

	const handleClickSave = (data: any) => {
		console.log('SAVING', data);
		setInEdit(false);
	};

	const handleClickCancel = () => {
		console.log('CANCELING EDIT');
		setInEdit(false);
	};

	const handleClickDelete = () => {
		console.log('DELETING');
	};
	return (
		<Styled.Wrapper>
			{inEdit ? (
				<SettingsInEdit
					name={name}
					type={type}
					clickedSave={handleClickSave}
					clickedCancel={handleClickCancel}
				/>
			) : (
				<SettingsRow
					name={name}
					type={type}
					clickedEdit={handleSetInEdit}
					clickedDelete={handleClickDelete}
				/>
			)}
		</Styled.Wrapper>
	);
};
export default SettingsField;
