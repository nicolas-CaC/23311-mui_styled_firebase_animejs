import { StyledButton, StyledForm, StyledInput, StyledTitle } from "../styles/LoginStyles"
import { loginData } from "../data/loginData"

const { login: log, register: reg } = loginData

export const Sign = ({
    register,
    eventOnChange,
    eventOnClick,
    changeStatus,
    googleSignin,
    waiting }) =>

    <StyledForm register={ register }>
        <StyledTitle>{
            register ? reg.title : log.title }
        </StyledTitle>

        <StyledInput
            name="name"
            type="text"
            placeholder={ register ? reg.inputUser : log.inputUser }
            onChange={ eventOnChange }
        />
        <StyledInput
            name="pass"
            type="password"
            placeholder={ register ? reg.inputPass : log.inputPass }
            onChange={ eventOnChange }
        />

        <StyledButton
            disabled={ waiting }
            onClick={ eventOnClick }>
            { register ? reg.button : log.button }
        </StyledButton>

        <StyledButton
            changeButton
            disabled={ waiting }
            onClick={ changeStatus }>
            { register ? reg.changeStatus : log.changeStatus }
        </StyledButton>

        <StyledButton
            google
            disabled={ waiting }
            onClick={ googleSignin }>
            Loguearme con cuenta Google
        </StyledButton>
    </StyledForm>