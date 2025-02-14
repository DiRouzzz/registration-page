import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { RegisterLayoutYup } from './RegisterLayoutYup.jsx';
import { useForm } from 'react-hook-form';

const REGEX_EMAIL = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const REGEX_PASSWORD = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const fieldsSchema = yup.object().shape({
	email: yup
		.string()
		.required('Введите email')
		.matches(
			REGEX_EMAIL,
			'Введите корректный email (например, example@mail.com)'
		),
	password: yup
		.string()
		.required('Введите пароль')
		.matches(
			REGEX_PASSWORD,
			'Пароль должен содержать минимум 8 символов, хотя бы одну букву и одну цифру'
		),
	passwordRepeat: yup
		.string()
		.required('Повторите пароль')
		.oneOf([yup.ref('password')], 'Пароли не совпадают'),
});

export const RegisterContainerYup = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		defaultValues: {
			email: '',
			password: '',
			passwordRepeat: '',
		},
		resolver: yupResolver(fieldsSchema),
	});

	const sendFormData = formData => {
		console.log('Форма отправлена:', formData);
		reset();
	};

	return (
		<RegisterLayoutYup
			emailErrors={errors.email?.message}
			passwordErrors={errors.password?.message}
			passwordRepeatErrors={errors.passwordRepeat?.message}
			register={register}
			handleSubmit={handleSubmit}
			onSubmit={sendFormData}
		/>
	);
};
