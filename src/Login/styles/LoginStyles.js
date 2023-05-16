import styled from "styled-components";

export const StyledForm = styled.form`
    gap: 1.25em;     
    margin: 2em;
    color: white;
    padding: 1em;
    display: flex;  
    border-radius: 5px;
    align-items: center;
    flex-direction: column;
    background-color: ${props => props.register ? 'rgba(100,0,255,75%)' : 'rgba(0,0,255,65%)'};
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5em;
    transition: .5s all;
    box-shadow: 0px 3px 3px 3px rgba(0,0,0,5%), 0px 5px 20px 3px rgba(0,0,0,30%)
`

export const StyledTitle = styled.h1`
    font-size: 1.2em
`

export const StyledInput = styled.input`
    width: 100%;
    border: 0px;
    padding: 0.5em;
    font-size: .8em;
    font-family: inherit;
    border-radius: 0.25em;
    box-shadow: 0px 1px 7px rgba(0,0,0,50%);
`
export const StyledButton = styled.button`
    border: 0px;
    color: white;
    display: flex;
    margin: 0.2em 0;
    cursor: pointer;
    padding: 0.5em 2em;
    width: fit-content;
    font-size: inherit;
    border-radius: 0.2em;
    font-family: inherit;
    justify-content: center;
    box-shadow: 0px 1px 7px rgba(0,0,0,50%);
    background: ${props =>
        props.changeButton
            ? "linear-gradient(45deg, rgba(0, 28, 130, 1)0%, rgba(00, 67, 163, 1) 100%)"
            : props.google
                ? 'red'
                : 'linear-gradient(45deg, rgba(73, 28, 130, 1)0%, rgba(110, 67, 163, 1) 100%)'
    };

    &:hover{
        background: linear-gradient(45deg, rgba(28,130,127,1) 0%, rgba(67,163,155,1) 100%);
    }
`

export const StyledError = styled.div`
    background: linear-gradient(45deg, rgba(255,0,0,1) 0%, rgba(200,73,73,1) 100%);
    color: white;
    width: 75%;
    transition: all 1s;
    padding: 0.2em 0;
    font-size: inherit;
    border-radius: 0.2em;
    transform: scale(0);
    text-shadow: 0px 2px 5px black;
    text-align: center
`