import styles from '../../styles.module.css';

export const RegisterLayout = ({
	email,
	password,
	passwordRepeat,
	onChangeRegister,
	handleSubmit,
	validateRegister,
	errorMail,
	errorPassword,
	errorPasswordRepeat,
	isValid,
	isCheckState,
}) => {
	return (
		<>
			<div className={styles.container}>
				<form onSubmit={handleSubmit}>
					<h2>Регистрация</h2>

					<div className={styles.inputGroup}>
						<label htmlFor='email'>Email</label>
						<input
							name='email'
							type='email'
							value={email}
							onBlur={({ target }) => validateRegister(target.name)}
							onChange={({ target }) =>
								onChangeRegister(target.name, target.value)
							}
							id='email'
							placeholder='Введите email'
							required
						/>
						{errorMail && <div className={styles.errorLabel}>{errorMail}</div>}
					</div>

					<div className={styles.inputGroup}>
						<label htmlFor='password'>Пароль</label>
						<input
							name='password'
							type='password'
							value={password}
							onBlur={({ target }) => validateRegister(target.name)}
							onChange={({ target }) =>
								onChangeRegister(target.name, target.value)
							}
							id='password'
							placeholder='Введите пароль'
							required
						/>
						{errorPassword && (
							<div className={styles.errorLabel}>{errorPassword}</div>
						)}
					</div>

					<div className={styles.inputGroup}>
						<label htmlFor='passwordRepeat'>Повторите пароль</label>
						<input
							name='passwordRepeat'
							type='password'
							value={passwordRepeat}
							onBlur={({ target }) => validateRegister(target.name)}
							onChange={({ target }) =>
								onChangeRegister(target.name, target.value)
							}
							id='passwordRepeat'
							placeholder='Повторите пароль'
							required
						/>
						{errorPasswordRepeat && (
							<div className={styles.errorLabel}>{errorPasswordRepeat}</div>
						)}
					</div>

					<button
						type='submit'
						className={styles.btn}
						disabled={!isValid || isCheckState}>
						Зарегистрироваться
					</button>
				</form>
			</div>
		</>
	);
};
