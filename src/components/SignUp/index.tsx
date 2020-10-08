import React, { FC } from 'react'
import { Button } from '../../styles/globalStyles'
import { FormInputSign, FormSign, SignUpContainer } from './styles'

const SignUp: FC = () => {
    return (
        <>
            <SignUpContainer>
                <FormSign>
                    <FormInputSign name="email" type="email" placeholder="Your Email" />
                    <FormInputSign name="email" type="email" placeholder="Your Password" />
                    <Button fontBig>Sign Up</Button>
                </FormSign>
            </SignUpContainer>
        </>
    )
}

export default SignUp
