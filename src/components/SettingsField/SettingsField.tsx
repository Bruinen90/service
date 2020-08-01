import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as actionCreators from '../../store/actions/actionCreators';

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
}

const SettingsField: React.FC<SettingsFieldProps> = ({
	_id,
	name,
	type,
	category,
}) => {
	const dispatch = useDispatch();

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
		dispatch(
			actionCreators.deleteSettingsFiels({
				deleteId: _id,
				settingsCategory: category,
			})
		);
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
