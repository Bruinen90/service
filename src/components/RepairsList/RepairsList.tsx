import React, { useState } from 'react';
import { removeSpaces } from '../../common/functions';

// Mui
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	TableSortLabel,
} from '@mui/material';

// Types
import { FetchedRepair } from '../../types/Repair';

//Styles
import * as Styled from './stylesRepairsList';
import { Field, FieldCategory } from '../../types/Settings';
import { DataGrid } from '@mui/x-data-grid';
import { GridColDef, GridRowsProp } from '@mui/x-data-grid/models';

//Types
export interface OutputField extends Field {
	readableName?: string;
	hidden?: boolean;
}

interface RepairsListProps {
	repairs: FetchedRepair[];
	dataFields: {
		customers: { fields: OutputField[] };
		devices: { fields: OutputField[] };
		repairs: { fields: OutputField[] };
	};
}

type CategoryType = 'customer' | 'device' | 'repairData';

const generateOutputCell = ({
	repair,
	dataField,
	subset,
}: {
	repair: FetchedRepair;
	dataField: OutputField;
	subset: CategoryType;
}) => {
	if (dataField.type === 'checkbox') {
		return repair[subset][dataField.name] ? 'TAK' : 'NIE';
	}
	if (dataField.readableName) {
		return repair[subset][dataField.name];
	}
	return repair[subset][removeSpaces(dataField.name)];
};

const RepairsList: React.FC<RepairsListProps> = ({ repairs, dataFields }) => {
	const fields: OutputField[] = [
		{
			name: 'phoneNumber',
			_id: 'phoneNumber',
			type: 'text',
			readableName: 'Numer telefonu',
			category: 'customers',
		},
		{
			name: 'number',
			_id: 'number',
			type: 'text',
			readableName: 'Numer naprawy',
			category: 'repairs',
		},
		...dataFields.devices.fields,
		...dataFields.customers.fields,
		...dataFields.repairs.fields,
	];

	const mappedFields: GridColDef[] = fields.map(field => ({
		field: removeSpaces(field.name),
		headerName: field.readableName ? field.readableName : field.name,
		width: 150,
	}));

	const mappedRepairs: GridRowsProp = repairs.map(repair => {
		const row: { [key: string]: string } = { id: repair._id };
		fields.forEach(field => {
			const category: keyof FetchedRepair =
				field.category === 'customers'
					? 'customer'
					: field.category === 'devices'
					? 'device'
					: 'repairData';
			let value = repair[category][removeSpaces(field.name)];
			if (value === undefined) {
				value = repair[category][field.name];
			}
			row[removeSpaces(field.name)] = value;
		});
		return row;
	});

	// console.log(mappedFields, 'REPAIRS', mappedRepairs);
	// console.log(repairs);

	return (
		<Styled.Wrapper style={{ height: '70vh', width: '70vw' }}>
			<DataGrid rows={mappedRepairs} columns={mappedFields} />
		</Styled.Wrapper>
	);
};
export default RepairsList;
