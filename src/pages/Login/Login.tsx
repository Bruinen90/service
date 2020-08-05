import React, { useState } from 'react';
import * as watcherTypes from '../../store/sagas/watcherTypes';
import { useDispatch } from 'react-redux';

//Styles
import * as Styled from './stylesLogin';
import { TextField, Button } from '@material-ui/core';

//Types
interface LoginProps {}

interface LoginForm {
	login: string;
	password: string;
}

const Login: React.FC<LoginProps> = () => {
	const dispatch = useDispatch();
	const [loginData, setLoginData] = useState<LoginForm>({
		login: '',
		password: '',
	});

	const changeLogin = (event: React.ChangeEvent) => {
		const targetInput = event.target as HTMLInputElement;
		setLoginData(prev => ({
			...prev,
			login: targetInput.value,
		}));
	};

	const changePassword = (event: React.ChangeEvent) => {
		const targetInput = event.target as HTMLInputElement;
		setLoginData(prev => ({
			...prev,
			password: targetInput.value,
		}));
	};

	const handleLoginSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		dispatch({
			type: watcherTypes.WATCH_LOGIN_SERVICE,
			payload: loginData,
		});
	};
	return (
		<Styled.Wrapper>
			<Styled.LoginBox>
				<Styled.LoginForm onSubmit={handleLoginSubmit}>
					<TextField
						label='Nazwa serwisu (login)'
						name='login'
						type='text'
						onChange={changeLogin}
						style={{ marginBottom: '1rem' }}
					/>
					<TextField
						label='Hasło'
						name='password'
						type='password'
						onChange={changePassword}
						style={{ marginBottom: '1rem' }}
					/>
					<Button variant='contained' type='submit'>
						Zaloguj się
					</Button>
				</Styled.LoginForm>
			</Styled.LoginBox>
		</Styled.Wrapper>
	);
};
export default Login;
