import React from 'react'
import { Button, Typography } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormProvider, useForm } from 'react-hook-form'
import FormField from '../../FormField'

import { RegisterFormSchema } from '../../../utils/schemas/registerValidation'
import styles from '../AuthDialog.module.scss'

interface RegisterFormProps {
    openLogin: () => void
}

const RegisterForm: React.FC<RegisterFormProps> = ({ openLogin }) => {
    const form = useForm({
        mode: 'onSubmit',
        resolver: yupResolver(RegisterFormSchema),
    })

    const onSubmit = (data) => console.log(data)

    return (
        <FormProvider {...form}>
            <Button onClick={openLogin} className="d-flex mb-10">
                <ArrowBackIcon />
                Назад
            </Button>
            <Typography className={styles.title}>
                Регистрация через почту
            </Typography>
            <div className="mt-20">
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField name="fullname" label="Имя и фамилия" />
                    <FormField name="email" label="Почта" />
                    <FormField name="password" label="Пароль" />
                    <Button type="submit" color="primary" variant="contained">
                        Зарегистрироваться
                    </Button>
                    <Button
                        onClick={openLogin}
                        className="ml-10"
                        color="primary"
                        variant="text"
                    >
                        Войти
                    </Button>
                </form>
            </div>
        </FormProvider>
    )
}

export default RegisterForm
