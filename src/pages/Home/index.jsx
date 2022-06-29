import {useState} from 'react';
import {Header} from '../../components/Header'
import {Navigation} from '../../components/Navigation/'
import {WatchList} from '../../components/WatchList';
import {PdfFile, PdfFile2} from '../../components/PdfFile'
import {CarDetails} from '../../components/CarDetails'
import {HotelDetails} from '../../components/HotelDetails'
import {FlightDetails} from '../../components/FlightDetails'
import {DetinationDetails} from '../../components/DestinationDetails';
import {BsFillTelephoneFill, BsFillCameraVideoFill} from 'react-icons/bs';
import { motion, AnimatePresence } from "framer-motion";

import './Home.css'

export const  Home = () => {
    const [visible, setVisible] = useState(true);
    const [visible2, setVisible2] = useState(true);

    function openBlcok() {
      return setVisible(!visible);
    }

  return (
      <>
      <Header />

        <div className="my__trip">
            <div className="my__trip__top">
                <h3 className="my__trip__title">My Trip</h3>
              <div>
                <BsFillTelephoneFill className="my__trip__connect blue__bg"/>
                <BsFillCameraVideoFill className="my__trip__connect green__bg"/>
              </div>
            </div>

            <div className="my__trip_bg">

          <PdfFile/>

            </div>
            <div className="my__trip__time">
                <div className="trip__time">
                    <div>Days</div>
                    <p className="trip__fw"><span>30</span></p>
                </div>
                <div className="trip__time">
                    <div>Hours</div>
                    <p className="trip__fw"><span>4</span></p>
                </div>
                <div className="trip__time">
                    <div>Mins</div>
                    <p className="trip__fw"><span>20</span></p>
                </div>
                <div className="trip__time">
                    <div>Secs</div>
                    <p className="trip__fw"><span>20</span></p>
                </div>
            </div>
        </div>

        <div className="details">
        <DetinationDetails />
          

          <div className="detail__item">
            <div className="detail__content">
              <div className="detail__top__content" onClick={() => setVisible2(!visible2)}>
                <div className="detail__title">Traveler List</div>
                <button className={visible2 ? "btn__arrow__rotated" : "btn__arrow"} >
                <img className="arrow__img" src="/images/arrow_rotate.svg" alt="arrow_rotate" />
                </button>
              </div>
            <motion.div>
            <AnimatePresence>
        <motion.div
          key="question"
          className="rounded-tr-md relative z-20  rounded-br-md shadow-sm px-1 py-2 bg-blue-200 cursor-pointer font-open border-l-2 border-yellow-500"
          onClick={() => setVisible2(!visible2)}
        >
        </motion.div>

        {visible2 && (
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
            <div className={visible2 ? "all__details_visible" : "all__details"}>
              <div className="traveler__list">

                <div className="traveler__list_item">

                <div className="checkbox__traveler">
                  <input className="checkbox__input" type="checkbox" id="checkbox-id" />
                  <label className="label__checkbox" for="checkbox-id"></label>
                </div>

                <div className="info__user">
                  <div className="nickname__user"><span className="info__user_text">Nick Kostopoulos</span></div>
                  <div className="bio__data">Date of Birth:<span lassName="info__user_text"> 29/12/1950</span></div>
                  <div className="bio__data">Exp.Date:<span lassName="info__user_text"> 29/12/1950</span></div>
                  <div className="bio__data">Passport:<span lassName="info__user_text"> A12121213</span></div>
                </div>

                <WatchList/>

                </div>

                <div className="traveler__list_item">
                <div className="checkbox__traveler">
                  <input className="checkbox__input" type="checkbox" id="checkbox-id2" />
                  <label className="label__checkbox" for="checkbox-id2"></label>
                </div>

                <div className="info__user">
                  <div className="nickname__user"><span className="info__user_text">Nick Kostopoulos</span></div>
                  <div className="bio__data">Date of Birth:<span lassName="info__user_text"> 29/12/1950</span></div>
                  <div className="bio__data">Exp.Date:<span lassName="info__user_text"> 29/12/1950</span></div>
                  <div className="bio__data">Passport:<span lassName="info__user_text"> A12121213</span></div>
                </div>

                <WatchList/>

                </div>  

                <div className="traveler__list_item">
                <div className="checkbox__traveler">
                  <input className="checkbox__input" type="checkbox" id="checkbox-id3" />
                  <label className="label__checkbox" for="checkbox-id3"></label>
                </div>

                <div className="info__user">
                  <div className="nickname__user"><span className="info__user_text">Nick Kostopoulos</span></div>
                  <div className="bio__data">Date of Birth:<span lassName="info__user_text"> 29/12/1950</span></div>
                  <div className="bio__data">Exp.Date:<span lassName="info__user_text"> 29/12/1950</span></div>
                  <div className="bio__data">Passport:<span lassName="info__user_text"> A12121213</span></div>
                </div>

                <WatchList/>

                </div>  

                <div className="traveler__list_item">
                <div className="checkbox__traveler">
                  <input className="checkbox__input" type="checkbox" id="checkbox-id4" />
                  <label className="label__checkbox" for="checkbox-id4"></label>
                </div>

                <div className="info__user">
                  <div className="nickname__user"><span className="info__user_text">Nick Kostopoulos</span></div>
                  <div className="bio__data">Date of Birth:<span lassName="info__user_text"> 29/12/1950</span></div>
                  <div className="bio__data">Exp.Date:<span lassName="info__user_text"> 29/12/1950</span></div>
                  <div className="bio__data">Passport:<span lassName="info__user_text"> A12121213</span></div>
                </div>

               <WatchList/>

                </div>

                <div className="buttons buttons__watch_list">
                  <input type="submit" value="Cancel" className="cancel__home"/>
                  <input type="submit" value="Rebook" className="rebook__home"/>
                </div>
                
              </div>    
            </div>
          </motion.div>
        )}
              
            </AnimatePresence>
            </motion.div>
            </div>
          </div>
            
            <FlightDetails/>

            <HotelDetails />

          <CarDetails/>

        </div>

        <div className="buttons__sub">
          <input type="submit" value="Cancel" className="cancel__home"/>
          <input type="submit" value="Rebook" className="rebook__home mr-70"/>
          <PdfFile2 />
        </div>

        <Navigation />
      </>
    )
}
