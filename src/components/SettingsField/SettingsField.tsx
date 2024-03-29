import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as actionCreators from '../../store/actions/actionCreators';
import * as watcherTypes from '../../store/sagas/watcherTypes';

//Styles
import * as Styled from './stylesSettingsField';

// Components
import SettingsInEdit from '../SettingsInEdit/SettingsInEdit';
import SettingsRow from '../SettingsRow/SettingsRow';

//Types
import { FieldType } from '../../types/Settings';
import { SettingsCategories } from '../../types/State';
interface SettingsFieldProps {
	_id: string;
	name: string;
	type: FieldType;
	category: SettingsCategories;
	newField?: boolean;
	required?: boolean;
	doneEditing?: () => void;
}

const SettingsField: React.FC<SettingsFieldProps> = ({
	_id,
	name,
	type,
	category,
	required,
	newField = false,
	doneEditing,
}) => {
	const dispatch = useDispatch();

	const [inEdit, setInEdit] = useState(newField);

	const handleSetInEdit = () => {
		setInEdit(true);
	};

	const handleClickSave = (data: any) => {
		dispatch(
			actionCreators.createSettingsField({
				settingsCategory: category,
				newFieldData: data,
			})
		);
		if (doneEditing) {
			doneEditing();
		}
		setInEdit(false);
	};

	const handleClickCancel = () => {
		if (doneEditing) {
			doneEditing();
		}
		setInEdit(false);
	};

	const handleClickDelete = () => {
		console.log('DELETING');
		dispatch({
			type: watcherTypes.WATCH_DELETE_SETTINGS_FIELD,
			payload: { _id: _id, category: category },
		});
	};

	return (
		<Styled.Wrapper>
			{inEdit ? (
				<SettingsInEdit
					_id={_id}
					name={name}
					type={type}
					required={required}
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
