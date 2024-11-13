import styled, {css} from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 0 auto;
    margin-top: 120px;
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Column = styled.div`
    flex: 1;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    margin-right
    align-items: center;
    margin-top: 15px;
`

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 20px;
    line-height: 44px;
    margin-left: 65px;
    height: 308px;

    color: #FFFFFF;
`

export const TitleLogin = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 44px;
    margin-bottom: 8px;
`

export const SubtitleLogin = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    margin-bottom: 35px;
`

export const BeneathLogin = styled.p`
    margin-top: 24px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;

    color: #FFFFFF;
`

export const Wrapper = styled.div`
    max-width: 300px;
`

export const LoginText =  styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    color: #FFFFFF;
    margin-right: 5px;
    

    button {
        color: #23DD7A;
        background: transparent;
        border: transparent;
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 19px;
    }
`

export const ErrorText = styled.span`
    font-family: 'Open Sans';
    color:#FF0000;
    font-size: 12px;
`