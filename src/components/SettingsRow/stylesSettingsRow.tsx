import { styled, Card } from '@mui/material';

export const Wrapper = styled(Card)(({ theme }) => ({
	padding: theme.spacing(2),
	display: 'grid',
	gridTemplateColumns: '3fr 2fr 1fr',
	alignItems: 'center',
}));
