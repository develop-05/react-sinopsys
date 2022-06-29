import React from 'react';

import './SelectCar.css';

export const SelectCar = () => {
    return (
      <>
        <div className="select__car_item">
            <div className="car__item_content">
                <span className="num__count">1</span>
            
                <div className="car__rate_days">
                  <div className="img__car">
                    <img src="/images/car.png" alt="car" />
                  </div>
                <div className="car__rental">
                    <div><span className="color__blue rate__days">€560</span></div>
                    <div><span className="grey__text">5 day rental</span></div>
                </div>
                </div>

                <div className="mark__car"><span>Toyota Aygo or similar</span></div>
                <div><span className="grey__text">Group A - MDMR</span></div>

                <div className="settings__car">
                    <img className="icon__set" src="/images/blue__user_icon.svg" alt="blue person" />
                    <div className="color__blue petrol"><span>Petrol</span></div>
                    <img className="icon__set" src="/images/speedometer.svg" alt="speedometer" />
                    <div className="color__blue"><span>Maual</span></div>
                </div>

                <div className="rules__car"><span>Fare: Non Ref or Refundable</span></div>

              <div className="checks checks__select">
                <p className="check__in pick_up">Pick up Location</p>
                <div className="detail__time max-w2"> <span className="span__tetx_z">Hertz Central, 29.07.2021, 10:45AM</span> </div>
                <div className="dotted__line max__w_line"></div>

                <div className="mt-50"></div>

                <p className="check__in ml-50 mb-5">Drop Off Location</p>
                <div className="detail__time max-w-select-car mt-10 ml-50"> <span className="span__tetx_z">Athens Airport, 02.08.2021, 14:30AM</span> </div>
                <div className="dotted__line max__w_line"></div>
              </div>

            <div className="select__btn">
              <button className="flight__btn">Select Car</button>
            </div>

            </div>
        </div>
      </>
    );
}