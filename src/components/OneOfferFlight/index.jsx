import {useState} from 'react';
import {ChooseTicket} from '../ChooseTicket'

import '../OfferFlight/OfferFlight.css';
import '../../components.css';

export const OneOfferFlight = () => {

  const [visible, setVisible] =  useState(false);

    return (
      <>
      <div className={"offer__flight"}>
        <div className="offer__flight_content">
          
          <div className="offer__count"><span>1</span></div>

          <div className="about__flight">
            <div className="air__company"><span>Air France Aegean Airlines </span></div>
            <div className="price__ticket">€250.80 /<img src="/images/person.svg" alt="person"/>
            <span className="person__name grey_text3">Marine Economy</span>
            </div>
          </div>

        <div className="flight__block">

          <div className="flight__time">
              <div className="flight__minth"><span className="grey__text">28 June</span></div>
              <div className="flight__hours"><span>21:50</span></div>
              <div className="flight__location"><span className="grey__text4">Athens </span>ATH</div>
          </div>

            <div className="flight__settings">
                <div className="blue__plane">
                    <img src="/images/blue__plane.svg" alt="blue plane" />
                </div>
                <div className="travel__time">
                    <img src="/images/sharp.svg" alt="sharp" />
                    <span> 14 hours travel </span>
                </div>
                <div className="toddler">
                    <img src="/images/toddler.svg" alt="toddler" />
                </div>
                <div className="red__text"><span>1 STOP LIN</span></div>
            </div>

          <div className="flight__time">
              <div className="flight__minth"><span className="grey__text">29 June</span></div>
              <div className="flight__hours"><span>21:50</span></div>
              <div className="flight__location"><span className="grey__text4">Athens </span>ATH</div>
          </div>

        </div>

        <div className="flight__block">

          <div className="flight__time">
              <div className="flight__minth"><span className="grey__text">31 June</span></div>
              <div className="flight__hours"><span>21:50</span></div>
              <div className="flight__location"><span className="grey__text4">Athens </span>ATH</div>
          </div>

            <div className="flight__settings">
                <div className="blue__plane">
                    <img src="/images/blue__plane.svg" alt="blue plane" />
                </div>
                <div className="travel__time">
                    <img src="/images/sharp.svg" alt="sharp" />
                    <span> 14 hours travel </span>
                </div>
                <div className="toddler">
                    <img src="/images/toddler.svg" alt="toddler" />
                </div>
                <div className="red__text"><span>1 STOP LIN</span></div>
            </div>

          <div className="flight__time">
              <div className="flight__minth"><span className="grey__text">1 July</span></div>
              <div className="flight__hours"><span>21:50</span></div>
              <div className="flight__location"><span className="grey__text4">Athens </span>ATH</div>
          </div>

        </div>

        <div className="count__tickets">
            <div className="mt-25"><span className="grey__text">Number of Tickets:</span> 3</div>
            <div><span className="grey__text">Baggage:</span> 2PC</div>
        </div>

      <div className="flight__btn_block">
        <button  className="flight__btn"
        onClick={() => setVisible(!visible)}
        >Select flight</button>
        <img className={visible ? "btn__arrow__rotated" : "btn__arrow"} src="/images/black__down_arrow.svg" alt="arrow" />
      </div>

        </div>
      </div>

      <div className={visible ? "all__details_visible" : "all__details "}>
        <h3 className="visible__title">Fare Options</h3>
        <div className="block__center">
          <ChooseTicket />
        </div>
      </div>



      

   
      </>
    );
}