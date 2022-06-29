import {useState} from 'react';
import {Link} from 'react-router-dom';


import '../Register.css';

export const Login = () => {
    const [isType, setIsType] = useState(true);


  return (
    <>
        <div className="register__form_wrapper">
            <div className="register__logo">
                <img src="/images/long_logo.png" alt="register logo" />
            </div>
            <p className="register__text">Learn to calm down the  winds of your mind,and you will enjoy great inner pleasure</p>
            
              <div className="register__form register__form_login">
            
                <div className="register__form_content">
                <h3 className="register__title">Log in</h3>

                  <div>
                    <input className="register__input" type="text" placeholder="email@company.com" />
                    <div className="watch__input_label" htmlFor="">EMAIL ADDRESS</div>
                  </div>
               
                  <div>
                    <input
                      className="register__input"
                      type={isType ? "password" : "text"}  
                    />
                    <div className="watch__input_label" htmlFor="">PASSWORD</div>
                  </div>

                  <div className="btn__show_block">
                  <button className="btn__show" onClick={() => setIsType(!isType)}>
                    <img src="/images/eye.svg" alt="eye" />
                  </button>
                </div>

              <div className="register__link">
                  <Link to="/remember-password" className="register__link blue__color fw-bold">Forgot Password?</Link>
              </div>

              <input type="submit" className="register__submit" value="Log in" />

              <div className="redirection">
                <span className="redirection__text">Don’t have an account?</span>
                <Link to="/signup" className="blue__color link__reg_fz"> Sign up</Link>
              </div>

                </div>
            </div>
        </div>
    </>
  )
}
