import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../../types/State';
import * as actionTypes from '../../store/actions/actionTypes';

//Styles
import * as Styled from './stylesDuplicatesSearchEngine';
import { List, ListItemButton, ListItemText, Typography } from '@mui/material';

//Types
import { ICustomer } from '../../types/Customer';
interface DuplicatesSearchEngineProps {
	category: 'device' | 'customer';
	searchKey: string;
	value: string | Date | number;
	storeUpdateActionType: string;
}

const DuplicatesSearchEngine: React.FC<DuplicatesSearchEngineProps> = ({
	category,
	searchKey,
	value,
	storeUpdateActionType,
}) => {
	const dispatch = useDispatch();

	const beforeSelectionValues = useSelector(
		(state: State) => state.newRepair[category]
	);
	const [foundRecords, setFoundRecords] = useState<ICustomer[]>([]);
	const [recordSelected, setRecordSelected] = useState(false);
	const [oldValues, setOldValues] = useState<any>();

	const handleRecordSelected = ({ record }: { record: any }) => {
		setRecordSelected(true);
		setOldValues(beforeSelectionValues);
		dispatch({
			type: storeUpdateActionType,
			payload: record,
		});
	};

	useEffect(() => {
		const find = async () => {
			try {
				const response = await axios.get(
					`/${category}s/find?${searchKey}=${value}`
				);
				if (response && response.status === 200) {
					setFoundRecords(response.data[category + 's']);
				}
			} catch (err) {
				console.log(err);
			}
		};
		if ((value as string).length > 2) {
			find();
		}
	}, [category, searchKey, value]);
	return (
		<Styled.Wrapper>
			<List>
				{foundRecords.map(customer => (
					<ListItemButton
						key={customer._id as string}
						onClick={() =>
							handleRecordSelected({ record: customer })
						}
					>
						<ListItemText
							primary={customer.imię + ' ' + customer.nazwisko}
							secondary={customer.phoneNumber}
						/>
					</ListItemButton>
				))}
			</List>
		</Styled.Wrapper>
	);
};

export default DuplicatesSearchEngine;
