import React from 'react'
import {Link} from "react-router-dom";

import '../../components.css';
import './OfferTickets.css';

export const OfferTickets = () => {
  return (
    <div className="nav__offers">
      <div className="nav__offers_content">
      
      <Link to="">
        <div className="rebook mr-110">Rebook</div>
      </Link>

  <div className="nav__two_link">
    <Link to="/">
      <div className="cancel__outline">Cancel</div>
    </Link>
    <Link to="">
        <div className="rebook">issue ticket</div>
    </Link>
  </div>
      
      </div>
    </div>
  )
}
