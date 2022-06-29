import React from 'react';

import './SendReq.css';

export const SendReq = () => {
  return (
    <div className="fixed__req">
      <div className="traveler__block">
        <div className="traveler__icon_block">
          <img className="req__traveler_icon" src="/images/traveler.svg" alt="traveler" />
          <div className="count__travelers">0<span> Travelers selected</span></div>
        </div>

        <div>
          <input type="submit" className="btn__send_req" value="SEND REQUEST"/>
        </div>
      </div>
    </div>
  )
}