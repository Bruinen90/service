import { styled, Card } from '@mui/material';

export const Wrapper = styled('main')({
	width: '100%',
	minHeight: '100vh',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	background: '#444',
});

export const LoginBox = styled(Card)(({ theme }) => ({
	padding: theme.spacing(3),
}));

export const LoginForm = styled('form')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
}));
