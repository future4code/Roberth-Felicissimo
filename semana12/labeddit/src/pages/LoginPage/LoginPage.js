import React from 'react'
import { Button } from '@material-ui/core'

function LoginPage() {
    return (
        <div>
            <h1>Login Page</h1>
            <input 
            placeholder="E-mail"
            />
            <input 
            placeholder="Senha"
            />
            <Button variant="contained" color="primary">
               Login
            </Button>
        </div>
    )
}

export default LoginPage
