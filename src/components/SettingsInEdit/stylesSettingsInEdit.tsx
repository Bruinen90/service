import { styled, Card } from '@material-ui/core';

export const Wrapper = styled(Card)(({ theme }) => ({
	padding: theme.spacing(2),
}));

export const RadioRow = styled('div')(({ theme }) => ({
	display: 'block',
}));
