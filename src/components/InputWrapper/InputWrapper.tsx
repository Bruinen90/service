import React from 'react';

//Styles
import * as Styled from './stylesInputWrapper';

//Types
interface InputWrapperProps {
	children: JSX.Element;
}

const InputWrapper: React.FC<InputWrapperProps> = ({ children }) => (
	<Styled.Wrapper>{children}</Styled.Wrapper>
);

export default InputWrapper;
