import React from 'react';

import ReCAPTCHA from "react-google-recaptcha";
import { Link } from 'react-router-dom';

import '../../../components.css';
import '../Register.css';

export const RememberPassword = () => {

  function onChange(value) {
    console.log("Captcha value:", value);
  }

  return (
    <>
      <div className="register__form_wrapper">
        <div className="register__logo">
          <img src="/images/long_logo.png" alt="register logo" />
        </div>
        <p className="register__text">Learn to calm down the  winds of your mind,and you will enjoy great inner pleasure</p>

        <div className="register__form">

          <div className="register__form_content">
            <Link to="/login">
              <span className="rotate__exit">+</span>
            </Link>
            <div>
              <h3 className="register__title register__title_reset">Reset Password</h3>
              <p className="description__reset_pass">We will email you instructions to reset your password.If you don’t have access to your email.Please contact your Administrator</p>
            </div>

            <div className="register__input_reset">
              <input className="register__input" type="text" />
              <div className="reg__label" htmlFor="">Username</div>
            </div>

                <ReCAPTCHA className="captcha" sitekey="6LdVf5IgAAAAAEer75rGgXQpxAUg0nsgZF6P3t3D" onChange={onChange} /> 
              
            

                <input type="submit" className="btn__reset_pass" value="Reset Password" />

            <p className="register__policy__text grey__text">Copyright 2022 Antaeus Group of Companies. All rights Reserved. <span className="mindseed">Privacy Policy </span>
              Powered By <span className="mindseed">Mindseed</span></p>
          </div>
        </div>
      </div>
    </>
  )
}