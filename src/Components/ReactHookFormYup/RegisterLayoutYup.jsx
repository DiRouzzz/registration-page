import styles from '../../styles.module.css';

export const RegisterLayoutYup = ({
	register,
	emailErrors,
	passwordErrors,
	passwordRepeatErrors,
	handleSubmit,
	onSubmit,
}) => {
	return (
		<>
			<div className={styles.container}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<h2>Регистрация</h2>
					<div className={styles.inputGroup}>
						<label htmlFor='email'>Email</label>
						<input
							name='email'
							type='email'
							id='email'
							placeholder='Введите email'
							{...register('email')}
						/>
						{!!emailErrors && (
							<div className={styles.errorLabel}>{emailErrors}</div>
						)}
					</div>
					<div className={styles.inputGroup}>
						<label htmlFor='password'>Пароль</label>
						<input
							name='password'
							type='password'
							id='password'
							placeholder='Введите пароль'
							{...register('password')}
						/>
						{!!passwordErrors && (
							<div className={styles.errorLabel}>{passwordErrors}</div>
						)}
					</div>
					<div className={styles.inputGroup}>
						<label htmlFor='passwordRepeat'>Повторите пароль</label>
						<input
							name='passwordRepeat'
							type='password'
							id='passwordRepeat'
							placeholder='Повторите пароль'
							{...register('passwordRepeat')}
						/>
						{!!passwordRepeatErrors && (
							<div className={styles.errorLabel}>{passwordRepeatErrors}</div>
						)}
					</div>
					<button type='submit' className={styles.btn}>
						Зарегистрироваться
					</button>
				</form>
			</div>
		</>
	);
};
