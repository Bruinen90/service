import React from 'react';
import { removeSpaces } from '../../common/functions';

// MuiX
import { GridColDef, GridRowsProp } from '@mui/x-data-grid/models';
import translations from './DataGridLocalization';

// Types
import { FetchedRepair } from '../../types/Repair';

//Styles
import * as Styled from './stylesRepairsList';
import { Field, FieldCategory } from '../../types/Settings';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

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
		// "Fixed" fields
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
		{
			name: 'serviceman',
			_id: 'serviceman',
			type: 'radio',
			readableName: 'Serwisant',
			category: 'repairs',
		},
		{
			name: 'enddate',
			_id: 'enddate',
			type: 'date',
			readableName: 'Data ukończenia',
			category: 'repairs',
		},
		// Fileds added by admin in settings
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
			// For boolean types
			if (typeof value === 'boolean') {
				value = value ? 'TAK' : 'NIE';
			}
			// Workaround for serviceman object type
			if (typeof value === 'object') {
				value = value.name;
			}
			row[removeSpaces(field.name)] = value;
		});
		return row;
	});

	return (
		<Styled.Wrapper
			style={{ display: 'flex', height: '100%', width: '100%' }}
		>
			<div style={{ flexGrow: 1 }}>
				<DataGrid
					rows={mappedRepairs}
					columns={mappedFields}
					autoHeight
					localeText={translations}
					components={{ Toolbar: GridToolbar }}
				/>
			</div>
		</Styled.Wrapper>
	);
};
export default RepairsList;
