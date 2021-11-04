import React, { useState } from 'react'
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  TextField,
  Typography,
} from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

import styles from './AuthDialog.module.scss'

interface AuthDialogProps {
  onClose: () => void
  open: boolean
}

export const AuthDialog: React.FC<AuthDialogProps> = ({ onClose, open }) => {
  const [formType, setFormType] = useState<'main' | 'email'>('main')

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby='responsive-dialog-title'
      maxWidth='xs'
      fullWidth
    >
      <DialogContent>
        <DialogContentText>
          {formType === 'email' && (
            <Button
              onClick={() => setFormType('main')}
              className='d-flex mb-10'
            >
              <ArrowBackIcon />
              Назад
            </Button>
          )}

          <Typography className={styles.title}>
            {formType === 'email' ? 'Вход через почту' : 'Вход в RJ'}
          </Typography>
          {formType === 'main' && (
            <div className={styles.content}>
              <Button className='mb-15' variant='contained' fullWidth>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                >
                  <path
                    className='st0'
                    d='M13.162 18.994c.609 0 .858-.406.851-.915-.031-1.917.714-2.949 2.059-1.604 1.488 1.488 1.796 2.519 3.603 2.519h3.2c.808 0 1.126-.26 1.126-.668 0-.863-1.421-2.386-2.625-3.504-1.686-1.565-1.765-1.602-.313-3.486 1.801-2.339 4.157-5.336 2.073-5.336h-3.981c-.772 0-.828.435-1.103 1.083-.995 2.347-2.886 5.387-3.604 4.922-.751-.485-.407-2.406-.35-5.261.015-.754.011-1.271-1.141-1.539-.629-.145-1.241-.205-1.809-.205-2.273 0-3.841.953-2.95 1.119 1.571.293 1.42 3.692 1.054 5.16-.638 2.556-3.036-2.024-4.035-4.305-.241-.548-.315-.974-1.175-.974h-3.255c-.492 0-.787.16-.787.516 0 .602 2.96 6.72 5.786 9.77 2.756 2.975 5.48 2.708 7.376 2.708z'
                  />
                </svg>
                Вконтакте
              </Button>
              <Button className='mb-15' variant='contained' fullWidth>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                >
                  <path
                    d='M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z'
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                  />
                </svg>
                Google
              </Button>
              <Button
                onClick={() => setFormType('email')}
                className='mb-15'
                variant='contained'
                fullWidth
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                >
                  <path d='M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z' />
                </svg>
                Через почту
              </Button>
            </div>
          )}

          {formType === 'email' && (
            <div className='mt-20'>
              <form>
                <TextField
                  className='mb-20'
                  size='small'
                  label='Почта'
                  variant='outlined'
                  fullWidth
                  required
                />
                <TextField
                  type='password'
                  className='mb-20'
                  size='small'
                  label='Пароль'
                  variant='outlined'
                  fullWidth
                  required
                />
                <Button color='primary' variant='contained'>
                  Войти
                </Button>
              </form>
            </div>
          )}
        </DialogContentText>
      </DialogContent>
    </Dialog>
  )
}
