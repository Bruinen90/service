import React from 'react';
import * as actionTypes from '../../store/actions/actionTypes';

//Styles
import * as Styled from './stylesNavigation';

// MUI
import {
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Button,
} from '@mui/material';
import Logo from '../Logo/Logo';
import {
	Add,
	List as ListIcon,
	People,
	Search,
	Settings,
	ExitToApp,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

//Types
interface NavigationProps {
	closeSideDrawer: () => void;
}

interface NavItemProps {
	icon: any;
	caption: string;
	target: string;
	itemClicked: () => void;
}

const NavItem: React.FC<NavItemProps> = ({
	icon,
	caption,
	target,
	itemClicked,
}) => (
	<Link
		to={target}
		onClick={itemClicked}
		style={{ color: 'inherit', textDecoration: 'none' }}
	>
		<ListItem button>
			<ListItemIcon>{icon}</ListItemIcon>
			<ListItemText>{caption}</ListItemText>
		</ListItem>
	</Link>
);

const Navigation: React.FC<NavigationProps> = ({ closeSideDrawer }) => {
	const dispatch = useDispatch();
	const logout = () => {
		localStorage.removeItem('token');
		dispatch({ type: actionTypes.SET_SERVICE_LOGOUT });
	};
	return (
		<Styled.Wrapper>
			<Logo />
			<Styled.Menu>
				<List component='ul'>
					<NavItem
						target='/nowa-naprawa'
						caption='Nowa naprawa'
						itemClicked={closeSideDrawer}
						icon={<Add />}
					/>
					<NavItem
						target='/lista-napraw'
						caption='Lista napraw'
						itemClicked={closeSideDrawer}
						icon={<ListIcon />}
					/>{' '}
					<NavItem
						target='/klienci'
						caption='Klienci'
						itemClicked={closeSideDrawer}
						icon={<People />}
					/>{' '}
					<NavItem
						target='/szukaj'
						caption='Szukaj'
						itemClicked={closeSideDrawer}
						icon={<Search />}
					/>
					<NavItem
						target='/ustawienia'
						caption='Ustawienia'
						itemClicked={closeSideDrawer}
						icon={<Settings />}
					/>
				</List>
				<Button
					startIcon={<ExitToApp />}
					color='secondary'
					onClick={logout}
				>
					Wyloguj się
				</Button>
			</Styled.Menu>
		</Styled.Wrapper>
	);
};
export default Navigation;
