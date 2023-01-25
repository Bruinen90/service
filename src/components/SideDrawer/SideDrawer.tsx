import React, { useState } from 'react';

// MUI
import { Hidden, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Close } from '@mui/icons-material';

//Styles
import * as Styled from './stylesSideDrawer';
import Navigation from '../Navigation/Navigation';

//Types
interface DrawerProps {}

const SideDrawer: React.FC<DrawerProps> = () => {
	const [open, setOpen] = useState(false);

	const handleToggleDrawer = () => {
		setOpen(prev => !prev);
	};
	return (
		<Styled.Wrapper>
			<Hidden smDown>
				<Drawer
					variant='persistent'
					anchor='left'
					open={true}
					PaperProps={{
						style: {
							width: Styled.DRAWER_WIDTH,
							padding: '1rem',
							height: '100%',
							background: 'transparent',
						},
					}}
				>
					<Navigation closeSideDrawer={handleToggleDrawer} />
				</Drawer>
			</Hidden>
			<Hidden mdUp>
				<Styled.HamburgerIcon onClick={handleToggleDrawer}>
					{open ? <Close /> : <MenuIcon />}
				</Styled.HamburgerIcon>
				<Drawer
					anchor='right'
					open={open}
					onClose={handleToggleDrawer}
					PaperProps={{
						style: {
							width: Styled.DRAWER_WIDTH,
							padding: '1rem',
						},
					}}
				>
					<Navigation closeSideDrawer={handleToggleDrawer} />
				</Drawer>
			</Hidden>
		</Styled.Wrapper>
	);
};

export default SideDrawer;
