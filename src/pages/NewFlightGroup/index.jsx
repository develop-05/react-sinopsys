import React from 'react';
import {Flights} from '../../components/Flights';
import {Travelers} from '../../components/Travelers';
import {CreateGroup} from '../../components/CreateGroup';
import {Link} from 'react-router-dom';
import TextField from '@mui/material/TextField';


import './NewFlightGroup.css';

export const NewFlightGroup = () => {
  return (
    <>
      <div className="request__link_content">
        <div className="new__request">
          <Link to="/">
            <img className="arrow__back" src="/images/arrow_back.svg" alt="arrow back" />
          </Link>
        </div>
          <span className="new__request_link">new Request</span>
       </div>

      <div className="loading__request">
        <img className="loading__request_img" src="/images/loading_request2.png" alt="loaing req" />
      </div>


    <div className="new__flight_group">
      <div className="detail__title fz-18 new__flight_group-title">New Flight Group</div>

        <div className="req__div">
          <input className="req__input" id="birth" type="text" placeholder="GROUP NAME" />
        </div>

        <div className="req__div">
          <input className="req__input" id="birth" type="text" placeholder="04/02/2022" />
          <div className="req__input_label" htmlFor="birth">DEPARTURE DATE</div>
        </div>

        <label className="label__date" htmlFor='date' >
          <img className="req__blue_icon" src="/images/blue_calendar.svg" alt="calendar" />
        </label>

        <div className="req__div2">
          <input className="req__input" id="birth" type="text" placeholder="12:03" />
          <div className="req__input_label" htmlFor="birth">DEPARTURE TIME</div>
        </div>

        <label className="label__date" htmlFor='date' >
          <img className="req__blue_icon" src="/images/blue_clock.svg" alt="calendar" />
        </label>

        <div className="or"><span>OR</span></div>

        <div className="req__div2">
          <input className="req__input" id="birth" type="text" placeholder="04/02/2022" />
          <div className="req__input_label" htmlFor="birth">ARRIVAL TIME</div>
        </div>

        <label className="label__date" htmlFor='date' >
          <img className="req__blue_icon" src="/images/blue_calendar.svg" alt="calendar" />
        </label>

        <div className="req__div2">
          <input className="req__input" id="birth" type="text" placeholder="04/02/2022" />
          <div className="req__input_label" htmlFor="birth">ARRIVAL TIME</div>
        </div>

        <label className="label__date" htmlFor='date' >
          <img className="req__blue_icon" src="/images/blue_clock.svg" alt="calendar" />
        </label>

        <Flights />
        <Travelers />
        <CreateGroup />

    </div>

    </>
  )
}