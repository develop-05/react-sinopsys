 import {useState} from 'react';

import {Header} from '../../components/Header';
import {OfferTickets} from '../../components/OfferTickets';
import {GeneralInfo} from '../../components/GeneraInfo';
import {OneOfferFlight} from '../../components/OneOfferFlight'
import {HotelCart} from '../../components/HotelCart';
import {SelectCar} from '../../components/SelectCar';

import './OfferCorporate.css';

export const OfferCorporate = () => {
    return (
        <>
         <Header />
            <h3 className="proposal__title">Proposal</h3>

            <GeneralInfo />

            <div className="offers__title">
              <div className="offer__title_left"><span>Offers for Flight 1</span></div>
              <div className="offer__title_right"><span>Travel Advisory</span></div>
            </div>
            <OneOfferFlight />  


            <div className="offer__title_left ml-40 mb-10"><span>Accomodation Offers</span></div>

            <HotelCart />

            <h3 className="title__car blue__text">Car Rental Offers</h3>

          <SelectCar/>
          <SelectCar/>
          <SelectCar/>
          <div className="mt-200"></div>
          <OfferTickets />
          
        </>
    );
}