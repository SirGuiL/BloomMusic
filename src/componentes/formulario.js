import React from 'react';
import {
  FormSection,
  FormH1,
  HomeLink,
  FormWrapper,
  Form,
  FormH2,
  InputBlock,
  Label,
  Input,
  BtnLogin,
  ForgotPass
} from './formComponents';

export default class Formulario extends React.Component{

    fadeOut(e) {

      const form = document.querySelector('form');
      const title = document.querySelector('#title');
      const login = document.querySelector('#login-email');
      const pass = document.querySelector('#login-password');
        
      if(login.value === '' || pass.value === ''){
          form.classList.add('error');
      }

      const errorForm = document.querySelector('.error');

      if(errorForm){
        errorForm.addEventListener('animationend', function(e){
          if(e.animationName === 'denied'){
            errorForm.classList.remove('error');
          }
        });
      }
      else{
        form.classList.add('form-hide');
        title.style.display = 'none';

        // const email = document.querySelector('#login-email').value;
        // const senha = document.querySelector('#login-password').value;
    
        // window.location.href = "./controller/login.js";
      }

      e.preventDefault();      
    }
    animationEnd(e){
      const form = document.querySelector('form');
      const body = document.querySelector('body');

      if(e.animationName === 'FormFadeOut'){
        form.style.display = 'none';
        body.style.overflow = 'none';
      } 
    }
    animationStart(e){
      const body = document.querySelector('body');
      if(e.animationName === 'FormFadeOut'){
        body.style.overflow = 'hidden';
      }
    }

    render(){
        return(
          <FormSection>
            <FormH1 id="title">
              <HomeLink to="/">
              <i class="fas fa-headphones"></i>
              </HomeLink>
              Bloom Music™
            </FormH1>
            <FormWrapper>
              <Form action="" onAnimationEnd={this.animationEnd} onAnimationStart={this.animationStart}>
                <FormH2>Sign in to your account</FormH2>
                <InputBlock>
                  <Label for="login-email"> Email </Label>
                  <Input type="email" id="login-email" />
                </InputBlock>
                <InputBlock>
                  <Label for="login-password"> Password </Label>
                  <Input type="password" id="login-password" />
                </InputBlock>
                <BtnLogin type="submit" onClick={this.fadeOut}>Login</BtnLogin>
                <ForgotPass to="./forgotPass">Forgot Password</ForgotPass>
              </Form>
            </FormWrapper>


          {/* <div>
            <section className="form-section">
              <h1>Bloom Music™</h1>
        
              <div className="form-wrapper">
                <form action="" onAnimationEnd={this.animationEnd} onAnimationStart={this.animationStart}>
                  <div className="input-block">
                    <label for="login-email">Email</label>
                    <input type="email" id="login-email" />
                  </div>
                  <div className="input-block">
                    <label for="login-password">Password</label>
                    <input type="password" id="login-password" />
                  </div>
                  <button type="submit" class="btn-login" onClick={this.fadeOut}>Login</button>
                </form>
              </div>
            </section>
          </div> */}
          </FormSection>
        )
    }
}