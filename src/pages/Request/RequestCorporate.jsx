import React from 'react';
import {Flights} from '../../components/Flights';
import {Travelers2} from '../../components/Travelers/Travelers2';
import {GeneralInfoCorporate} from '../../components/GeneraInfoReq/GeneralInfoCorporate';
import {RadioShows} from '../../components/RadioShows';
import {Link} from 'react-router-dom';



export const RequestCorporate = () => {
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

      <GeneralInfoCorporate />

        <Flights />
        <Travelers2 />
        <RadioShows />
  
    </div>

    <div className="mb-150"></div>

    <div className="fixed__req">
      <div className="traveler__block">
        <div className="traveler__icon_block">
          <img className="req__traveler_icon" src="/images/traveler.svg" alt="traveler" />
          <div className="count__travelers">1<span> Travelers selected</span></div>
        </div>

        <div>
          <input type="submit" className="btn__send_req-over" value="SEND REQUEST"/>
        </div>
      </div>
    </div>



    </>
  )
}