import {useState} from 'react';
import SliderDashboard from 'react-slick';
import {Link} from 'react-router-dom';
import {BsFillTelephoneFill} from 'react-icons/bs';
import { motion, AnimatePresence } from "framer-motion";

import {Header} from '../../components/Header'
import {Navigation} from '../../components/Navigation'

import '../../components.css';
import './Dashboard.css';

export const Dashboard = () => {

    const [isVisible, setIsVisible] = useState(true);
    const [isVisible2, setIsVisible2] = useState(true);

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 2.15,
        slidesToScroll: 1,
      };

  return (
    <>
      <Header />
      <div className="dashboard">
        <div className="dashoard__content">
          <div className="top__content">
              <h3 className="dashboard__title">Welcome back,<span> George</span></h3>
              {/* <img src="/images/phone.svg" alt="phone" /> */}
              <BsFillTelephoneFill className="dashboard__phone_fill" />
          </div>
          <SliderDashboard className="slider__dashboard" {...settings}>

              <Link to="/offers">
                  <div className="dashboard__cart_item">
                    <div className="dash__count"><span>8</span></div>
                    <div className="dash__name_cart"><span>OFFERS</span></div>
                    <span className="dash__slide_link">View all</span>
                  </div>
                </Link>

                <Link to="/ticketed">
                  <div className="dashboard__cart_item-bg">
                    <div className="dash__count"><span>4</span></div>
                    <div className="dash__name_cart ticketed"><span>TICKETED</span></div>
                    <span className="dash__slide_link">View all</span>
                  </div>
                </Link>

                <Link to="/pending">
                  <div className="dashboard__cart_item-bg">
                    <div className="dash__count"><span>4</span></div>
                    <div className="dash__name_cart pending"><span>PENDING</span></div>
                    <span className="dash__slide_link">View all</span>
                  </div>
                </Link>
                
          </SliderDashboard>
             <h3 className="color__blue dash__trip_title">My Trip</h3>

          <div className="dash__my_trip">
            <div className="dash__my_trip-content">
                <div className="dash__describe_location">
                <div className="dash__fw_text">Los Angeles Lax
                <div className="grey__text min-w200"> 28 June 2021   10:50</div>
                </div>
                <div className="location__flight_text content__text"><span>Air France 
Aegean Airlines</span></div>
              </div>
              <div className="main__dash_bg">
                <img className="main__dash_img" src="/images/LA.jpg" alt="picture Los Angeles Lax" />
              </div>
            <div className="dash__info_block">

              <div className="dash__info_tickets">
                <div><span className="dash__fw_text fz-16">ΑΤΗ - LAX</span></div>
                <div className="dash__grey_text"><span>1 stop 1 hour 10 mins (ZRH)</span></div>
                <div><span className="dash__time_flight">4  hours,23 mins</span></div>
                <div className="dash__grey_text">Ticket No:<span className="dash__time_flight"> W623LN9QO</span></div>
              </div>
              <img className="calendar__icon" src="/images/calendar.svg" alt="calendar" />
            </div>

            <div className="check__now dash__check_now">
              <div className="check__time">Check in opens in: <span>2</span>d <span>28</span>h <span>15</span>min</div>
              <input className="btn__check btn__dash_check" value="Check in now" type="submit" />
            </div>

            <div className="dash__toggle">
              <div className="dash__top_content-hotel">
               <div className="dash__text_content" onClick={() => setIsVisible(!isVisible)}>
                  <div className="dash__grey_text">4 Days stay at</div>
                  <h3 className="dash__about_toggle-title">Samoah Luxury Hotel</h3>
                  <div className="dash__grey_text mb-20">2 Persons</div>
               </div>

                <button onClick={() => setIsVisible(!isVisible)} className={isVisible ? "btn__arrow__rotated btn__dash_arrow_top" : "btn__arrow btn__dash_arrow_top"}>
                  <img src="/images/grey__arrow_down.svg" alt="arrow" />
                </button>
              </div>

              <motion.div>
            <AnimatePresence>
        <motion.div
          key="question"
          className="rounded-tr-md relative z-20  rounded-br-md shadow-sm px-1 py-2 bg-blue-200 cursor-pointer font-open border-l-2 border-yellow-500"
          onClick={() => setIsVisible(!isVisible)}
        >
        </motion.div>

        {isVisible && (
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
            <div className={isVisible ? "all__details_visible" : "all__details"}>
              <div className="dash__service">
                <div className="dash__grey_text">Check - in<span className="dash__answer_text"> Thu, 29 June</span></div>
                <div className="dash__grey_text">Check - out<span className="dash__answer_text dash__answer_text2">Sun, 3 July</span></div>
                <div className="dash__grey_text">Room type<span className="dash__answer_text">Luxury</span></div>
                <div className="dash__grey_text">Board type<span className="dash__answer_text">Bed & Breakfast</span></div>
              </div>
            </div>


          </motion.div>
        )}
              
            </AnimatePresence>
            </motion.div>

            </div>

            <div className="dash__toggle dash__toggle2">
              <div className="dash__top_content-hotel">
              <div className="dash__text_content" onClick={() => setIsVisible2(!isVisible2)}>
              <div className="dash__grey_text">4 Days car rental</div>
              <h3 className="dash__about_toggle-title mb-20">Toyota Aygo or similar</h3>
            </div>

            <button onClick={() => setIsVisible2(!isVisible2)} className={isVisible2 ? "btn__arrow__rotated btn__dash_arrow_bottom" : "btn__arrow btn__dash_arrow_bottom"}>
              <img className="grey__arrow_down" src="/images/grey__arrow_down.svg" alt="arrow" />
            </button>
        </div>


        <motion.div>
            <AnimatePresence>
        <motion.div
          key="question"
          className="rounded-tr-md relative z-20  rounded-br-md shadow-sm px-1 py-2 bg-blue-200 cursor-pointer font-open border-l-2 border-yellow-500"
          onClick={() => setIsVisible2(!isVisible2)}
        >
        </motion.div>

        {isVisible2 && (
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

            <div className={isVisible2 ? "all__details_visible" : "all__details"}>
              <div className="view__trip_details">
                <Link to="/"><span className="dash__view">View Trip Details</span></Link>
              </div>
            </div>
            
          </motion.div>
        )}
              
            </AnimatePresence>
            </motion.div>


            </div>
          </div>
        </div>

        </div>
      </div>

      <div className="dash__footer">
        <p className="dash__footer_text">© 2020 All Rights Reserved Antaeus Travel Group®</p>
      </div>
      <Navigation />
    </>
  )
}
