import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import SideDrawer from './components/SideDrawer/SideDrawer';

// Pages
import NewRepair from './pages/NewRepair/NewRepair';
import Index from './pages/Index/Index';
import Repairs from './pages/Repairs/Repairs';
import Settings from './pages/Settings/Settings';
import Customers from './pages/Settings/Customers/Customers';
import Search from './pages/Search/Search';

// Styles
import * as Styled from './stylesApp';

const App: React.FC = () => {
	return (
		<>
			<Styled.Wrapper>
				<SideDrawer />
				<Switch>
					<Route path='/nowa-naprawa' component={NewRepair} />
					<Route path='/lista-napraw' component={Repairs} />
					<Route path='/ustawienia' component={Settings} />
					<Route path='/klienci' component={Customers} />
					<Route path='/szukaj' component={Search} />
					<Route path='/' component={Index} />
				</Switch>
			</Styled.Wrapper>
		</>
	);
};

export default App;
