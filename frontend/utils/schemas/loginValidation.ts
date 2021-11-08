import * as yup from 'yup'

export const LoginFormSchema = yup
    .object({
        email: yup
            .string()
            .email('Неккорктная эл.почта')
            .required('Введите эл.почту'),
        password: yup.string().required('Введите пароль'),
    })
    .required()
