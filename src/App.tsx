import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import * as watcherTypes from './store/sagas/watcherTypes';

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
import Login from './pages/Login/Login';

// Types
import { State } from './types/State';
import Loading from './pages/Loading/Loading';

axios.defaults.baseURL = 'http://localhost:8080';

const App: React.FC = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch({ type: watcherTypes.WATCH_AUTO_LOGIN });
		dispatch({ type: watcherTypes.WATCH_FETCH_ALL_SERVICEMEN });
	}, [dispatch]);

	const company = useSelector((state: State) => state.company);
	const loading = useSelector((state: State) => state.loading);

	return (
		<>
			{loading.general && loading.general.isLoading ? (
				<Loading />
			) : company && company._id ? (
				<Styled.Wrapper>
					<SideDrawer />
					<Routes>
						<Route path='/nowa-naprawa' element={<NewRepair />} />
						<Route path='/lista-napraw' element={<Repairs />} />
						<Route path='/ustawienia/*' element={<Settings />} />
						<Route path='/klienci' element={<Customers />} />
						<Route path='/szukaj' element={<Search />} />
						<Route path='/' element={<Index />} />
					</Routes>
				</Styled.Wrapper>
			) : (
				<Login />
			)}
		</>
	);
};

export default App;
