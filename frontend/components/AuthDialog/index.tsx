import React, { useState } from 'react'
import { Dialog, DialogContent, DialogContentText } from '@material-ui/core'
import MainForm from './forms/Main'
import LoginForm from './forms/Login'
import RegisterForm from './forms/Register'

interface AuthDialogProps {
    onClose: () => void
    open: boolean
}

export const AuthDialog: React.FC<AuthDialogProps> = ({ onClose, open }) => {
    const [formType, setFormType] = useState<'main' | 'login' | 'register'>(
        'main'
    )

    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="responsive-dialog-title"
            maxWidth="xs"
            fullWidth
        >
            <DialogContent>
                <DialogContentText>
                    {formType === 'main' && (
                        <MainForm onOpenLogin={() => setFormType('login')} />
                    )}

                    {formType === 'login' && (
                        <LoginForm
                            openMain={() => setFormType('main')}
                            onOpenRegister={() => setFormType('register')}
                        />
                    )}

                    {formType === 'register' && (
                        <RegisterForm openLogin={() => setFormType('login')} />
                    )}
                </DialogContentText>
            </DialogContent>
        </Dialog>
    )
}
