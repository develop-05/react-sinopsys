import {useState} from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom';

import './HotelDetails.css';

export const HotelDetails = () => {

    const [visible, setVisible] = useState(true);
    const [visible2, setVisible2] = useState(false);

  return (
    <div className="detail__item">
    <div className="detail__content">
      <div className="detail__top__content" onClick={() => setVisible(!visible)}>
        <div className="detail__title">Hotel Details</div>
        <button className={visible ? "btn__arrow__rotated" : "btn__arrow"} >
        <img className="arrow__img" src="/images/arrow_rotate.svg" alt="arrow_rotate" />
        </button>
      </div>
    <motion.div>
    <AnimatePresence>
<motion.div
  key="question"
  className="rounded-tr-md relative z-20  rounded-br-md shadow-sm px-1 py-2 bg-blue-200 cursor-pointer font-open border-l-2 border-yellow-500"
  onClick={() => setVisible(!visible)}
>
</motion.div>

{visible && (
  <motion.div
    key="answer"
    initial={{ opacity: 0 }}
    animate={{
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    }}
    exit={{ opacity: 0 }}
    className="p-2 text-lg text-gray-700 border-l border-b border-gray-300"
  >
    <div className={visible ? "all__details_visible" : "all__details"}>
        <div className="detail__location"><span>Samoah Luxury Hotel</span></div>
        <span  className="grey__text">4 stars hotel</span>

          <div className="hotels">
            <div className="hotel__location">
              <img className="lcoation__blue"  src="/images/location_blue.svg" alt="location" />
              <div className="hotel__text"><span>Los Angeles, California</span></div>
            </div>
            <div className="user__tutor">
              <div className="blue__price blue__price_fz"><span>€2400</span></div>
            <div className="two__pax">
              <img className="pax__icon" src="/images/user_icon.svg" alt="user icon" />
              <span className="grey__text size__count">2</span>
            </div>
            </div>
          </div>

          <div className="links">

            <Link className="link__gallery" to="/">
              <img src="/images/gallery.svg" alt="gallery" />
              <div className="name__link">Gallery</div>
            </Link>

            <Link className="link__gallery" to="/">
              <img src="/images/direction.svg" alt="direction" />
              <div className="name__link">Directions</div>
            </Link>

          </div>

          <div className="checks">
          <p className="check__in">Check in</p>

            <div className="detail__time2"> <span className="span__tetx_z">Thursday,29 June</span> </div>
            <div className="dotted__line"></div>
            
            <p className="check__in check__out">Check out</p>
            <div className="mt-t detail__time2 "> <span className="span__tetx_z">Thursday,29 June</span> </div>
            <div className="dotted__line"></div>

          </div>

          <div className="hotel__service">

            <div className="service">

              <div className="service__item">
                <div className="grey__text serv__item">Room Type</div>
                <div className="item__type"><span>Multiple</span></div>
              </div>

              <div className="service__item">
                <div className="grey__text serv__item">Board Type</div>
                <div className="item__type"><span>Bed & Breakfast</span></div>
              </div>

              <div className="service__item">
                <div className="grey__text serv__item">Canc. Policy</div>
                <button onClick={() => setVisible2(!visible2)} className="view__more_hotel item__type"><span className="color__blue">View</span></button>
              </div>

        <div className={visible2 ? "overlay" : ""}>
        <div className={visible2 ? "watch__travel_info-visible bg__yellow" : "watch__travel_info"}>

          <h3 className="popup__title popup__title-mt">Cancellation Policy</h3>
          <span onClick={() => setVisible2(!visible2)} className="close close__mt">+</span>

          <div className="contenet__class ">
            <div className="economy__class">
              <div className="name__class"><span>Est. Cancellation fee</span></div>
            </div>

              <div className="policy__list">
                <div className="policy__item">Travelers</div>
                <div className="policy__item">Air-tickets</div>
                <div className="policy__item">Accomodation</div>
                <div className="policy__item">Transportation</div>
              </div>

              <div className="policy__list">
                <div className="policy__item">TEST TRAVELER(From previous request)</div>
                <div className="policy__item">0.00 $</div>
                <div className="policy__item">-</div>
                <div className="policy__item">-</div>
              </div>

              <div className="policy__list">
                <div className="policy__item">TEST TRAVELER(From previous request)</div>
                <div className="policy__item">0.00 $</div>
                <div className="policy__item">-</div>
                <div className="policy__item">-</div>
              </div>

              <div className="policy__list">
                <div className="policy__item">TEST TRAVELER(From previous request)</div>
                <div className="policy__item">0.00 $</div>
                <div className="policy__item">-</div>
                <div className="policy__item">-</div>
              </div>

          </div>
        </div>
      </div>

            </div>
          </div>

          <div className="facilities">

          <div className="faciluty__title">
            <span className="grey__text mb-10">Facilities:</span>
          </div>

          <div className="facility__list">
          <div className="fality__list_items">

          <div className="facility__item">
              <img className="check__light" src="/images/check_light.svg" alt="check" />
              <span className="check__text">Restaurant</span>
            </div>

            <div className="facility__item">
              <img className="check__light" src="/images/check_light.svg" alt="check" />
              <span className="check__text">Pool</span>
            </div>

            <div className="facility__item">
              <img className="check__light" src="/images/check_light.svg" alt="check" />
              <span className="check__text">Bar</span>
            </div>

            </div>

          <div className="fality__list_items">
            <div className="facility__item">
              <img className="check__light" src="/images/check_light.svg" alt="check" />
              <span className="check__text">Free Wifi</span>
            </div>

            <div className="facility__item">
              <img className="check__light" src="/images/check_light.svg" alt="check" />
              <span className="check__text">Fitness Center</span>
            </div>

            <div className="facility__item facility__item_last">
              <img className="check__light" src="/images/check_light.svg" alt="check" />
              <div className="check__text check__mt">Near to Public Transportation</div>
            </div>
          </div>
          </div>

          </div>
      </div>
  </motion.div>
)}
      
    </AnimatePresence>
    </motion.div>
    </div>
  </div>
    )
}
