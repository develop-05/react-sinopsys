import {useState} from 'react';
import {ChooseTicket, ChooseTicket2, ChooseTicket3} from '../ChooseTicket'

import './OfferFlight.css';
import '../../components.css';

export const OfferFlight = () => {

  const [visible, setVisible] =  useState(false);
  const [visible2, setVisible2] =  useState(false);
  const [visible3, setVisible3] =  useState(false);

    return (
      <>
      <div className={visible2 || visible3 ? "offer__flight opacity__visible" : "offer__flight" }>
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
            <div className="mt-25 fz_14"><span className="fz_14">Number of Tickets:</span> 3</div>
            <div className="fz_14"><span className="fz_14">Baggage:</span> 2PC</div>
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



      <div className={visible || visible3 ? "offer__flight opacity__visible" : "offer__flight" }>
        <div className="offer__flight_content">
          
          <div className="offer__count"><span>2</span></div>

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
            <div className="mt-25 fz_14"><span className="fz_14">Number of Tickets:</span> 3</div>
            <div className="fz_14"><span className="fz_14">Baggage:</span> 2PC</div>
        </div>

        <div className="flight__btn_block">
        <button  className="flight__btn"
        onClick={() => setVisible2(!visible2)}
        >Select flight</button>
        <img className={visible2 ? "btn__arrow__rotated" : "btn__arrow"} src="/images/black__down_arrow.svg" alt="arrow" />
      </div>


        </div>
      </div>

      <div className={visible2 ? "all__details_visible" : "all__details "}>
        <h3 className="visible__title">Fare Options</h3>
        <div className="block__center">
          <ChooseTicket2 />
        </div>
      </div>

      <div className={visible || visible2 ? "offer__flight opacity__visible" : "offer__flight" }>
        <div className="offer__flight_content">
          
          <div className="offer__count"><span>3</span></div>

          <div className="about__flight">
          <div className="ab__af">
            <img className="" src="/images/af.jpg" alt="af" />
          </div>
            <div className="price__ticket">€250.80 /<img src="/images/person.svg" alt="person"/>
            <span className="person__name grey_text3">Marine Economy</span>
            </div>
          </div>
          

        <div className="flight__block sm-mt">

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
            <div className="mt-25 fz_14"><span className="fz_14">Type:</span> Normal</div>
            <div className="fz_14"><span className="fz_14">Baggage:</span> 2PC</div>
        </div>

        <ul className="ul__tickets">
            <li className="ul__tickets_li">Number of tickets: 3</li>
            <li className="ul__tickets_li">KG Allowance: 0</li>
        </ul>

        <div className="flight__btn_block">
        <button  className="flight__btn"
        onClick={() => setVisible3(!visible3)}
        >Select flight</button>
        <img className={visible3 ? "btn__arrow__rotated" : "btn__arrow"} src="/images/black__down_arrow.svg" alt="arrow" />
      </div>

        </div>
      </div>

      <div className={visible3 ? "all__details_visible" : "all__details "}>
        <h3 className="visible__title">Fare Options</h3>
        <div className="block__center">
          <ChooseTicket3 />
        </div>
      </div>

      <div className="last__element"></div>
      

      </>
    );
}