import styled from 'styled-components'


export const SignUpContainer = styled.div`
    background-color:#101522;
    padding:10rem 4rem;
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    height:calc(60vh - 50px);
`

export const FormSign = styled.form`
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    @media (max-width:820px){
        width:80%;
    }
`

export const FormInputSign = styled.input`
    padding:10px 20px;
    border-radius:4px;
    margin-bottom:40px;
    outline:none;
    border:none;
    font-size:16px;
    border:1px solid #fff;

    &::placeholder{
        color:#242424;
    }

    @media (max-width:820px){
        width:100%;
        margin-right:0;
        margin-bottom:16px;
    }
`