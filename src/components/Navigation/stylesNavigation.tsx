import styled from '@emotion/styled';

export const Wrapper = styled('nav')(({ theme }) => ({
	height: '95%',
}));

export const Menu = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
	height: '100%',
});
