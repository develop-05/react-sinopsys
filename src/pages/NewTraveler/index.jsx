import React from 'react';
import {Link} from 'react-router-dom';
import TextField from '@mui/material/TextField';

import '../../components.css';
import './NewTraveler.css';

export const NewTraveler = () => {
  return (
    <>
      <div className="request__link_content">
        <div className="new__request">
          <Link to="/new-flight-group">
            <img className="arrow__back" src="/images/arrow_back.svg" alt="arrow back" />
          </Link>
        </div>
          <span className="new__request_link color__blue">New Traveler</span>
       </div>

      <div className="loading__request">
        <img className="loading__request_img" src="/images/loading_request2.png" alt="loaing req" />
      </div>

    <div className="new__traveler_content">
      <h3 className="new__traveler_title">TRAVELER’S PERSONAL INFOS</h3>

      <div className="req__inputs_list">
          <input className="req__input" type="text" />
          <div className="req__input_label" htmlFor="">NAME<span>*</span>
      </div>

        <div>
          <input className="req__input" type="text" />
          <div className="req__input_label" htmlFor="">SURNAME<span>*</span></div>
        </div>

        <div>
          <input className="req__input" type="text" />
          <div className="req__input_label" htmlFor="">MIDDLE NAME</div>
        </div>

        <div>
          <input className="req__input" id="birth" type="text" placeholder="04/02/2022" />
          <div className="req__input_label" htmlFor="birth">DATE OF BIRTH<span>*</span></div>
        </div>

        <label className="label__date" htmlFor='date' >
          <img className="req__blue_icon" src="/images/blue_calendar.svg" alt="calendar" />
        </label>

        <div>
          <input className="req__input" id="birth" type="text" placeholder="04/02/2022" />
          <div className="req__input_label" htmlFor="birth">EXP. DATE</div>
        </div>

        <label className="label__date" htmlFor='date' >
          <img className="req__blue_icon" src="/images/blue_calendar.svg" alt="calendar" />
        </label>

        <div>
          <input className="req__input" type="text" />
          <div className="req__input_label" htmlFor="">NATIONALITY</div>
        </div>

        <div>
          <input className="req__input" type="text" />
          <div className="req__input_label" htmlFor="">PASSPORT</div>
        </div>

        <div>
          <input className="req__input" type="text" />
          <div className="req__input_label" htmlFor="">HOME AIRPORT</div>
        </div>

        <div>
          <input className="req__input" type="text" />
          <div className="req__input_label" htmlFor="">SEAMAN BOOK</div>
        </div>
      </div>

        <div className="choose__gender"><span>Choose Gender</span></div>


    <div className="checkbox__list">

    <div className="checkbox__items">
            <div className="checkbox__traveler">
              <input name="visa" className="radio__input" type="radio" id="visa" />
              <label className="label__radio" name="visa" for="visa"><span className="visa__ml grey__text">MR</span></label>
            </div>

            <div className="checkbox__traveler usa__visa">
              <input name="visa" className="radio__input" type="radio" id="visa2" />
              <label className="label__radio" name="visa" htmlFor="visa2"><span className="visa__ml grey__text">MRS</span></label>
            </div>
        </div>

        <div className="checkbox__items">
            <div className="checkbox__traveler">
              <input className="checkbox__input" type="checkbox" id="visa3" />
              <label className="label__checkbox" for="visa3"><span className="visa">USA VISA</span></label>
            </div>

            <div className="checkbox__traveler usa__visa">
              <input className="checkbox__input" type="checkbox" id="visa4" />
              <label className="label__checkbox" for="visa4"><span className="visa">SCHENGEN VISA</span></label>
            </div>
        </div>
      </div>
    </div>


    <div className="travel__save_block">
        <Link to="/new-flight-group">
          <div className="close__grey"><span>CLOSE</span></div>
        </Link>

        <Link to="/overview">
          <div className="save__blue"><span>SAVE</span></div>
        </Link>
      </div>
    </>
  )
}