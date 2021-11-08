import * as yup from 'yup'

export const RegisterFormSchema = yup
    .object({
        fullname: yup.string().required('Введите имя и фамилию'),
        email: yup
            .string()
            .email('Неккорктная эл.почта')
            .required('Введите эл.почту'),
        password: yup.string().required('Введите пароль'),
    })
    .required()
