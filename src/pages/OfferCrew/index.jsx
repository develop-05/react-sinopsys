import React from 'react'
import {Header} from '../../components/Header';
import {GeneralInfo} from '../../components/GeneraInfo';
import {Summary} from '../../components/Summary'
import {OfferFlight} from '../../components/OfferFlight';
import {OfferTickets} from '../../components/OfferTickets';

import './OfferCrew.css';

export const OfferCrew = () => {
  return (
    <>
      <Header />
      <h3 className="proposal__title">Proposal</h3>
      <GeneralInfo />
      <Summary />
      <div className="offers__title">
        <div className="offer__title_left"><span>Offers for Flight 1</span></div>
        <div className="offer__title_right"><span>Travel Advisory</span></div>
      </div>
      <OfferFlight />
      <OfferTickets />
    </>
  )
}
