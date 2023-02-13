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
import { Field } from '../../types/Settings';

//Types
interface OuputField extends Field {
	readableName?: string;
}

interface RepairsListProps {
	repairs: FetchedRepair[];
	dataFields: {
		customers: { fields: OuputField[] };
		devices: { fields: OuputField[] };
		repairs: { fields: OuputField[] };
	};
}

type CategoryType = 'customer' | 'device' | 'repairData';

const generateOutputCell = ({
	repair,
	dataField,
	subset,
}: {
	repair: FetchedRepair;
	dataField: OuputField;
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
	const [sortBy, setSortBy] = useState<{
		category: CategoryType;
		fieldName: string;
	}>({ category: 'repairData', fieldName: 'number' });
	const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

	const customersFields: OuputField[] = [
		{
			name: 'phoneNumber',
			_id: 'phoneNumber',
			type: 'text',
			readableName: 'Numer telefonu',
			category: 'customers',
		},
		...dataFields.customers.fields,
	];

	const devicesFields = dataFields.devices.fields;
	const repairsFields: OuputField[] = [
		{
			name: 'number',
			_id: 'number',
			type: 'text',
			readableName: 'Number naprawy',
			category: 'devices',
		},
		...dataFields.repairs.fields,
	];

	const handleClickedSortBy = (event: React.MouseEvent<HTMLElement>) => {
		const target = event.target as HTMLElement;
		const fieldName = target.dataset.name!;
		let categoryAsKey: CategoryType;
		switch (target.dataset.category) {
			case 'customers':
				categoryAsKey = 'customer';
				break;
			case 'devices':
				categoryAsKey = 'device';
				break;
			case 'repairs':
				categoryAsKey = 'repairData';
				break;
			default:
				throw new Error('Error during categorizing sorting field');
		}

		setSortBy({
			category: categoryAsKey,
			fieldName: removeSpaces(fieldName),
		});
		setSortOrder(prev => (prev === 'asc' ? 'desc' : 'asc'));

		console.log(sortBy, sortOrder);
	};

	return (
		<Styled.Wrapper>
			<Table stickyHeader>
				<TableHead>
					<TableRow>
						<TableCell colSpan={customersFields.length}>
							Klient
						</TableCell>
						<TableCell colSpan={devicesFields.length}>
							Urządzenie
						</TableCell>
						<TableCell colSpan={devicesFields.length}>
							Naprawa
						</TableCell>
					</TableRow>
					<TableRow>
						{[
							...customersFields,
							...devicesFields,
							...repairsFields,
						].map(dataField => (
							<TableCell
								key={dataField._id}
								sortDirection={
									sortBy.fieldName ===
									removeSpaces(dataField.name)
										? sortOrder
										: false
								}
							>
								<TableSortLabel
									active={
										sortBy.fieldName ===
										removeSpaces(dataField.name)
									}
									direction={sortOrder}
									onClick={handleClickedSortBy}
									data-name={dataField.name}
									data-category={dataField.category}
								>
									{dataField.readableName
										? dataField.readableName
										: dataField.name}
								</TableSortLabel>
							</TableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody>
					{repairs
						.sort((repairA, repairB) => {
							const sortingMultiplier =
								sortOrder === 'asc' ? -1 : 1;
							console.log(
								repairA[sortBy.category][sortBy.fieldName] >
									repairB[sortBy.category][sortBy.fieldName]
							);
							return repairA[sortBy.category][sortBy.fieldName] >
								repairB[sortBy.category][sortBy.fieldName]
								? -1 * sortingMultiplier
								: 1 * sortingMultiplier;
						})
						.map(repair => (
							<TableRow key={repair._id as string}>
								{customersFields.map(dataField => (
									<TableCell key={dataField._id}>
										{generateOutputCell({
											repair,
											dataField,
											subset: 'customer',
										})}
									</TableCell>
								))}
								{devicesFields.map(dataField => (
									<TableCell key={dataField._id}>
										{generateOutputCell({
											repair,
											dataField,
											subset: 'device',
										})}
									</TableCell>
								))}
								{repairsFields.map(dataField => (
									<TableCell key={dataField._id}>
										{generateOutputCell({
											repair,
											dataField,
											subset: 'repairData',
										})}
									</TableCell>
								))}
							</TableRow>
						))}
				</TableBody>
			</Table>
		</Styled.Wrapper>
	);
};
export default RepairsList;
