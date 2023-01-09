import React from 'react';
import { useSelector } from 'react-redux';

//Styles
import * as Styled from './stylesButtonWithLoader';

// Mui
import { Button, ButtonProps, CircularProgress } from '@mui/material';

//Types
import { LoadingCategories, State, LoadingData } from '../../types/State';
interface ButtonWIthLoaderProps extends ButtonProps {
	loadingCategory: LoadingCategories;
	recordId?: string;
}

const ButtonWithLoader: React.FC<ButtonWIthLoaderProps> = ({
	children,
	loadingCategory,
	recordId,
	...other
}) => {
	const loading = useSelector((state: State) => state.loading);

	let isLoading = false;

	if (loading && loading[loadingCategory]) {
		if (Array.isArray(loading![loadingCategory])) {
			const loadersArr = loading[loadingCategory] as LoadingData[];
			const recordLoader = loadersArr.find(
				loader => loader.recordId === recordId
			);
			if (recordLoader && recordLoader.isLoading) {
				isLoading = true;
			}
		} else {
			const loadingState = loading[loadingCategory] as LoadingData;
			isLoading = loadingState.isLoading;
		}
	}
	return (
		<Button
			style={{ position: 'relative' }}
			{...other}
			disabled={isLoading}
		>
			<>
				<Styled.Text isLoading={isLoading}>{children}</Styled.Text>
				{isLoading && (
					<Styled.LoaderContainer>
						<CircularProgress size={'1em'} />
					</Styled.LoaderContainer>
				)}
			</>
		</Button>
	);
};
export default ButtonWithLoader;
