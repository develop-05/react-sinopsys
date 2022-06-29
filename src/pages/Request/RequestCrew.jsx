import React from 'react'
import {Link} from 'react-router-dom';

import {GeneralInfoReq} from '../../components/GeneraInfoReq';
import {SendReq} from '../../components/SendReq';

import './Request.css';

export const RequestCrew = () => {
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
        <img className="loading__request_img" src="/images/loading_request.png" alt="loaing req" />
    </div>

      <GeneralInfoReq />

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
  
    <SendReq />
      

    </>
      
    );
}