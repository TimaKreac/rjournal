import React from 'react'
import { Button, Typography } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { useForm, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import FormField from '../../FormField'
import { LoginFormSchema } from '../../../utils/schemas/loginValidation'

import styles from '../AuthDialog.module.scss'

interface LoginFormProps {
    onOpenRegister: () => void
    openMain: () => void
}

const LoginForm: React.FC<LoginFormProps> = ({ onOpenRegister, openMain }) => {
    const form = useForm({
        mode: 'onSubmit',
        resolver: yupResolver(LoginFormSchema),
    })

    const onSubmit = (data) => console.log(data)

    return (
        <FormProvider {...form}>
            <Button onClick={openMain} className="d-flex mb-10">
                <ArrowBackIcon />
                Назад
            </Button>
            <Typography className={styles.title}>Вход через почту</Typography>
            <div className="mt-20">
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField name="email" label="Почта" />
                    <FormField name="password" label="Пароль" />
                    <Button type="submit" color="primary" variant="contained">
                        Войти
                    </Button>
                    <Button
                        onClick={onOpenRegister}
                        className="ml-10"
                        color="primary"
                        variant="text"
                    >
                        Регистрация
                    </Button>
                </form>
            </div>
        </FormProvider>
    )
}

export default LoginForm
