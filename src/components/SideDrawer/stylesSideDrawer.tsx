import styled from '@emotion/styled';
import { IconButton } from '@mui/material';

export const DRAWER_WIDTH = '240px';

export const Wrapper = styled('div')(({ theme }) => ({
	[`@media only screen and (min-width: 600px)`]: {
		width: DRAWER_WIDTH,
	},
}));

export const HamburgerIcon = styled(IconButton)(({ theme }) => ({
	position: 'fixed',
	top: '1 rem',
	right: '1 rem',
	zIndex: 1500,
	[`@media only screen and (min-width: 600px)`]: {
		display: 'none',
	},
}));
