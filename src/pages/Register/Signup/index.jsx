import {useState} from 'react';
import {Link} from 'react-router-dom';
import TextField from '@mui/material/TextField';


import '../Register.css';

export const Signup = () => {
    const [isType, setIsType] = useState(true);
    const [isType2, setIsType2] = useState(true);


  return (
    <>
        <div className="register__form_wrapper">
            <div className="register__logo">
                <img src="/images/long_logo.png" alt="register logo" />
            </div>
            
              <div className="register__form register__form_signup">
                <div className="register__form_content">
                  <h3 className="register__title">Sign Up</h3>

                  <div>
                    <input className="register__input" type="text" />
                    <div className="watch__input_label">NAME</div>
                  </div>

                  <div>
                    <input className="register__input" type="text" />
                    <div className="watch__input_label">EMAIL ADDRESS</div>
                  </div>
               
                  <div>
                    <input
                      className="register__input"
                      type={isType ? "password" : "text"}  
                    />
                    <div className="watch__input_label">PASSWORD</div>
                  </div>

                <div className="btn__show_block">
                  <button className="btn__show" onClick={() => setIsType(!isType)}>
                    <img src="/images/eye.svg" alt="eye" />
                  </button>
                </div>
                  

                  <div>
                    <input
                      className="register__input"
                      type={isType2 ? "password" : "text"}  
                    />
                    <div className="watch__input_label">CONFIRM PASSWORD</div>
                  </div>

                  <div className="btn__show_block">
                    <button className="btn__show" onClick={() => setIsType2(!isType2)}>
                      <img src="/images/eye.svg" alt="eye" />
                    </button>
                </div>

              <div className="privacy__policy">
                <div className="allow__with_law">
                <div className="checkbox__traveler">
                  <input required className="checkbox__input" type="checkbox" id="checkbox-id" />
                  <label className="label__checkbox" for="checkbox-id"></label>
                </div>
              </div>

                <div className="privacy__policy_text"><span>By continuing you agree to the Antaeus </span>Term  &  Conditions & Privacy Policy</div>

              </div>

              <input type="submit" className="register__submit" value="Create Account" />

              <div className="redirection">
                <span className="redirection__text">Don’t have an account? </span>
                <Link to="/login" className="blue__color link__reg_fz">Log in</Link>
              </div>

                </div>
            </div>
        </div>
    </>
  )
}
