import React from 'react';

//Styles
import * as Styled from './stylesNavigation';

// MUI
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import Logo from '../Logo/Logo';
import {
	Add,
	List as ListIcon,
	People,
	Search,
	Settings,
} from '@material-ui/icons';
import { Link } from 'react-router-dom';

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
	return (
		<Styled.Wrapper>
			<Logo />
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
		</Styled.Wrapper>
	);
};
export default Navigation;
