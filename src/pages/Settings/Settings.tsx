import React, { useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

//Styles
import * as Styled from './stylesSettings';

// MUI
import { Typography, Tabs, Tab, AppBar } from '@material-ui/core';
import Customers from './Customers/Customers';
import General from './General/General';
import Repairs from '../Repairs/Repairs';
import Device from './Device/Device';

const TABS_LIST = [
	{ caption: 'ogólne', slug: 'ogolne', component: General },
	{ caption: 'naprawy', slug: 'naprawy', component: Repairs },
	{ caption: 'sprzęt', slug: 'sprzet', component: Device },
	{ caption: 'klienci', slug: 'klienci', component: Customers },
];

const Settings: React.FC = () => {
	const history = useHistory();
	const [activeTab, setActiveTab] = useState(0);

	const handleTabChange = (
		event: React.ChangeEvent<{}>,
		tabValue: number
	) => {
		setActiveTab(tabValue);
		history.push(`/ustawienia/${TABS_LIST[tabValue].slug}`);
	};
	return (
		<Styled.Wrapper>
			<Typography variant='h1'>Ustawienia</Typography>
			<AppBar position='static'>
				<Tabs value={activeTab} onChange={handleTabChange}>
					{TABS_LIST.map(tab => (
						<Tab label={tab.caption} key={tab.slug} />
					))}
				</Tabs>
			</AppBar>
			<Switch>
				{TABS_LIST.map(tab => (
					<Route
						path={`/ustawienia/${tab.slug}`}
						component={tab.component}
						key={tab.slug}
					/>
				))}
			</Switch>
		</Styled.Wrapper>
	);
};
export default Settings;
