import {useState} from 'react'
import { NavLink } from 'react-router-dom';
import {Header} from '../../components/Header'

import './Trips.css';

export const Trips = () => {

  const settings = {
    className: "slider__active",
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <>
      <Header />

      <div className="trips">
        <div className="trips__content">
          <h3 className="trips__title">Trips</h3>

          <p className="grey__text trip__text">On this panel you can see all the requests and the offers</p>
        
          <div className="tab__list">
            <div className="tab__item tab__item1">
              <NavLink to="/offers" className={({isActive}) => isActive ? "active__link" : ""}>Offers</NavLink>
              <span className="count__tab_items1">2</span>
            </div>
            <div className="tab__item tab__item2">
              <NavLink to="/ticketed" className={({isActive}) => isActive ? " active__link active__link2" : ""}>Ticketed </NavLink>
              <span className="count__tab_items2">4</span>
            </div>
            <div className="tab__item tab__item3">
              <NavLink to="/pending" className={({isActive}) => isActive ? " active__link active__link3" : ""}>pending Request</NavLink>
              <span className="count__tab_items3">3</span>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}