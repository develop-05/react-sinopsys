import React from 'react';
import {Link} from 'react-router-dom';
import {GeneralInfoReq} from '../../components/GeneraInfoReq';
import {SendReq} from '../../components/SendReq';

import './Overview.css';

export const Overview = () => {
  return (
    <>
      <div className="request__link_content">
        <div className="new__request">
          <Link to="/new-flight-group">
            <img className="arrow__back" src="/images/arrow_back.svg" alt="arrow back" />
          </Link>
        </div>
          <span className="new__request_link">new Request</span>
       </div>

      <div className="loading__request">
        <img className="loading__request_img" src="/images/loading_request3.jpg" alt="loaing req" />
      </div>

      <GeneralInfoReq />



      <div className="overview">
        <div className="overview__content">
            <div className="overview__top_content">
              <div className="overview__info">
                <h3 className="color__blue overview__title">Flight 1</h3>
                <div classname="overview__travelers">2<span className="grey__over"> Travelers</span></div>
              </div>
              <img className="edit__img" src="/images/edit.svg" alt="edit" />
            </div>
        </div>

        <div className="overview__date_flight">
          <div className="overview__date_part">
            <div className="overview__date_text"><span>DEPARTURE DATE</span></div>
            <div className="overview__date_grey-light"><span>03 October</span></div>
            <div className="overview__date_cws"><span>CWS</span></div>
          </div>
          <div>
            <img src="/images/grey_plane.svg" alt="plane" />
          </div>
          <div className="overview__date_part">
            <div className="overview__date_text"><span>ARRIVAL DATE</span></div>
            <div className="overview__date_grey-light"><span>23  MARCH</span></div>
            <div className="overview__date_cws"><span>CMW</span></div>
          </div>
        </div>


        <div className="overview__list">
            <div><span className="color__blue">Traveler List</span></div>
            <img className="blue__arrow" src="/images/blue_arrow.svg" alt="arrow" />
        </div>
      </div>


      <Link to="/new-flight-group">
    <div className="new__group">
      <button className="btn__add_new-group">
        <div className="blue__plus">
          <img src="/images/blue__plus.svg" alt="blue plus" />
        </div>
        <span className="add__mew_group-text">Add new group</span>
      </button>
    </div>
  </Link>


  <div className="fixed__req">
      <div className="traveler__block">
        <div className="traveler__icon_block">
          <img className="req__traveler_icon" src="/images/traveler.svg" alt="traveler" />
          <div className="count__travelers">2<span> Travelers selected</span></div>
        </div>

        <div>
          <input type="submit" className="btn__send_req-over" value="SEND REQUEST"/>
        </div>
      </div>
    </div>

    </>
  )
}