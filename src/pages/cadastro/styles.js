import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 100px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
`

export const Wrapper = styled.div`
    max-width: 380px;
    width: 100%;
`

export const Column = styled.div`
    flex: 1;
`

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    max-width: 388px;
    margin-bottom: 20px;
    line-height: 44px;

    color: #FFFFFF;
`

export const TitleCadastro = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 44px;
    margin-bottom: 8px;
    color: #FFFFFF;
`

export const SubtitleCadastro = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    margin-bottom: 30px;
    color: #FFFFFF;
`

export const TermsText = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    margin-top: 25px;
    margin-bottom: 15px;
    color: #FFFFFF;
`

export const LoginRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 6px;
    margin-top: 10px;
`

export const AlreadyHaveText = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    color: #FFFFFF;
`

export const LoginLink = styled.span`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    color: #23DD7A;
    cursor: pointer;
    transition: opacity 0.2s;

    &:hover {
        opacity: 0.8;
        text-decoration: underline;
    }
`
