import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FormSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #a202ff;
    height: 100vh;
`;

export const FormH1 = styled.h1`
    font-size: 32px;
    letter-spacing: 1px;
    margin: 20px 0;
    color: white;
`;

export const HomeLink = styled(Link)`
    font-size: 36px;
    margin-right: 20px;
    color: #fff;
`;

export const FormWrapper = styled.div`

`;

export const Form = styled.form`
    margin: 100px 0;
    background-color: #fff;
    padding: 50px 45px;
    border-radius: 5px;
    overflow: hidden;
    animation-name: formMove;
    animation-duration: .5s;

    &.form-hide{
        animation: FormFadeOut 1.4s forwards;
        animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    &.error{
        animation: denied .3s linear, formMove paused;
        animation-iteration-count: 2;
    }

    @keyframes formMove{
        from{
          opacity: 0;
          transform: scale(0.9);
        }
        to{
          opacity: 1;
          transform: scale(1);
        }
    }

    @keyframes FormFadeOut{
        from{
          transform: translateY(0%);
        }
        to{
          transform: translateY(100vh);
        }
    }

    @keyframes denied{
        0%{
          transform: translateX(0);
        }
        35%{
          transform: translateX(-15%);
        }
        75%{
          transform: translateX(15%);
        }
        100%{
          transform: translateX(0);
        }
      }
`;

export const FormH2 = styled.h2`
    font-size: 16px;
    letter-spacing: 1px;
    margin: 20px 0;
    color: #000;

    animation: inputMove .5s backwards;
    animation-delay: .15s;

    @keyframes inputMove{
        from{
          opacity: 0;
          transform: translateX(-36%);
        }
        to{
          opacity: 1;
          transform: translateX(0%);
        }
      }
`;

export const InputBlock = styled.div`
    margin-bottom: 20px;
    animation: inputMove .5s backwards;
    animation-delay: .15s;

    // &:nth-child(1){
    //     animation: inputMove .5s backwards;
    //     animation-delay: .15s;
    // }
    // &:nth-child(2){
    //     animation: inputMove .5s backwards;
    //     animation-delay: .20s;
    // }

    @keyframes inputMove{
        from{
          opacity: 0;
          transform: translateX(-36%);
        }
        to{
          opacity: 1;
          transform: translateX(0%);
        }
      }
`;

export const Label = styled.label`
    font-size: 14px;
    color: #e00096;
`;

export const Input = styled.input`
    width: 100%;
    display: block;
    margin-top: 8px;
    padding: 7px;
    font-size: 16px;
    color: #e00096;
    border-radius: 10px;
    border: 5px solid rgba(224, 0, 150, 0.5);
    outline: none;
`;

export const BtnLogin = styled.button`
    display: block;
    min-width: 120px;
    border: none;
    background-color: #e00096;
    color: white;
    border-radius: 25px;
    margin: auto;
    padding: 7px;
    animation: inputMove .5s backwards;
    animation-delay: .35s;
    outline: none;
    transition: .5s;

    &:hover{
      cursor: pointer;
      letter-spacing: 2px;
    }
`;

export const ForgotPass = styled(Link)`
    color: black;
    text-decoration: none;
    display: block;
    margin: 30px 50px 20px;
    margin-bottom: 0;
    font-weight: normal;
    font-size: 16px;
    animation: inputMove .5s backwards;
    animation-delay: .15s;

    @keyframes inputMove{
        from{
          opacity: 0;
          transform: translateX(-36%);
        }
        to{
          opacity: 1;
          transform: translateX(0%);
        }
      }
`;