import styled from '@emotion/styled';

interface TextProps {
	isLoading: boolean;
}

export const Text = styled('span')(({ isLoading }: TextProps) => ({
	opacity: isLoading ? 0 : 1,
}));

export const LoaderContainer = styled('div')({
	position: 'absolute',
	left: 0,
	top: 0,
	bottom: 0,
	right: 0,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
});
