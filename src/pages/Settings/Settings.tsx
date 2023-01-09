import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

//Styles
import * as Styled from './stylesSettings';

// MUI
import { Typography, Tabs, Tab } from '@mui/material';
import Customers from './Customers/Customers';
import General from './General/General';
import Repairs from './Repairs/Repairs';
import Device from './Device/Device';

const TABS_LIST = [
	{ caption: 'ogólne', slug: 'ogolne', component: <General /> },
	{ caption: 'naprawy', slug: 'naprawy', component: <Repairs /> },
	{ caption: 'sprzęt', slug: 'sprzet', component: <Device /> },
	{ caption: 'klienci', slug: 'klienci', component: <Customers /> },
];

const Settings: React.FC = () => {
	const navigate = useNavigate();
	const [activeTab, setActiveTab] = useState(0);

	const handleTabChange = (
		event: React.ChangeEvent<{}>,
		tabValue: number
	) => {
		setActiveTab(tabValue);
		navigate(`/ustawienia/${TABS_LIST[tabValue].slug}`);
	};
	return (
		<Styled.Wrapper>
			<Typography variant='h1'>Ustawienia</Typography>
			<Tabs
				value={activeTab}
				onChange={handleTabChange}
				style={{ marginTop: '1rem' }}
			>
				{TABS_LIST.map(tab => (
					<Tab label={tab.caption} key={tab.slug} />
				))}
			</Tabs>
			<Routes>
				{TABS_LIST.map(tab => (
					<Route
						path={tab.slug}
						key={tab.slug}
						element={tab.component}
					/>
				))}
				<Route path='*' key='default' element={<General />} />
			</Routes>
		</Styled.Wrapper>
	);
};
export default Settings;
