import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    max-width: 275px;
    height: 30px;
    border-bottom: 1px solid #3B3450;

    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

export const IconContainer = styled.div`
    margin-right: 10px;
    color: #8647AD;
`

export const InputText = styled.input`
    background-color: transparent;
    color: #FFFFFF;
    flex: 1;
    border: 0;
    height: 30px;
    outline: none;

    &::placeholder {
        color: #757575;
    }
`

export const ErrorText = styled.p`
    color: #FF5C5C;
    font-size: 12px;
    margin: -15px 0 15px 0;
`
