import { RegisterLayout } from './RegisterLayout';
import { useRef, useState } from 'react';

const REGEX_EMAIL = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const REGEX_PASSWORD = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const initialState = {
	email: '',
	password: '',
	passwordRepeat: '',
};

const initialStateError = {
	errorMail: '',
	errorPassword: '',
	errorPasswordRepeat: '',
};

const useRegister = () => {
	const [state, setState] = useState(initialState);

	return {
		getState: () => state,
		updateState: (fieldName, newValue) => {
			setState({ ...state, [fieldName]: newValue });
		},
		resetState: () => setState(initialState),
	};
};

const useErrorRegister = () => {
	const [error, setError] = useState(initialStateError);

	return {
		getError: () => error,
		updateError: (fieldName, newValue) => {
			setError({ ...error, [fieldName]: newValue });
		},
		resetError: () => setError(initialStateError),
	};
};

export const RegisterContainer = () => {
	const { getState, updateState, resetState } = useRegister();
	const { email, password, passwordRepeat } = getState();

	const { getError, updateError, resetError } = useErrorRegister();
	const { errorMail, errorPassword, errorPasswordRepeat } = getError();

	const [isValid, setIsValid] = useState(false);
	const focusRef = useRef(null);

	const validateRegister = targetName => {
		const validMail = REGEX_EMAIL.test(email);
		const validPassword = REGEX_PASSWORD.test(password);
		const validPasswordRepeat = password === passwordRepeat;

		if (targetName === 'email') {
			if (!validMail) {
				updateError(
					'errorMail',
					'Введите корректный email (например, example@mail.com)'
				);
			} else {
				updateError('errorMail', '');
			}
		}

		if (targetName === 'password') {
			if (!validPassword) {
				updateError(
					'errorPassword',
					'Пароль должен содержать минимум 8 символов, хотя бы одну букву и одну цифру.'
				);
			} else {
				updateError('errorPassword', '');
			}
		}

		if (targetName === 'passwordRepeat') {
			if (!validPasswordRepeat) {
				updateError('errorPasswordRepeat', 'Пароли не совпадают.');
			} else {
				updateError('errorPasswordRepeat', '');
			}
		}

		if (validMail && validPassword && validPasswordRepeat) {
			setIsValid(true);
			focusRef.current.focus();
		} else {
			setIsValid(false);
		}
	};

	const onChangeRegister = (targetName, value) => {
		updateState(targetName, value);

		if (targetName === 'email') updateError('errorMail', '');
		if (targetName === 'password') updateError('errorPassword', '');
		if (targetName === 'passwordRepeat') updateError('errorPasswordRepeat', '');
	};

	const handleSubmit = event => {
		event.preventDefault();
		console.log('Форма отправлена!', getState());
		resetState();
		resetError();
		setIsValid(false);
	};

	return (
		<RegisterLayout
			email={email}
			password={password}
			passwordRepeat={passwordRepeat}
			onChangeRegister={onChangeRegister}
			handleSubmit={handleSubmit}
			validateRegister={validateRegister}
			errorMail={errorMail}
			errorPassword={errorPassword}
			errorPasswordRepeat={errorPasswordRepeat}
			isValid={isValid}
			focusRef={focusRef}
		/>
	);
};
