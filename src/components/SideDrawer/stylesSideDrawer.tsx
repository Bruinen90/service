import { styled } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';

export const DRAWER_WIDTH = '240px';

export const Wrapper = styled('div')(({ theme }) => ({
	[theme.breakpoints.up('md')]: {
		width: DRAWER_WIDTH,
	},
}));

export const HamburgerIcon = styled(IconButton)(({ theme }) => ({
	position: 'fixed',
	top: theme.spacing(1),
	right: theme.spacing(1),
	zIndex: 1500,
	[theme.breakpoints.up('md')]: {
		display: 'none',
	},
}));
