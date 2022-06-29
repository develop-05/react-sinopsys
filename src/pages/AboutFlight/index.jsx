import {useState} from 'react'
import {Link} from 'react-router-dom';

import '../../components.css';
import './AboutFlight.css';


export const AboutFlight = () => {

    const [visible, setVisible] = useState(false)
  return (
    <>
  <div className="details__flight_page">
    <Link to="/offer-crew">
        <img className="return__comeback" src="/images/prevArrow.svg" alt="prev arrow" />
    </Link>

      <div className="outbound">
        <img className="plane__fly" src="/images/plane_fly.svg" alt="fly" />
        <span className='grey__text underline'>Outbound Flight on Wed, 28 June</span>  
      </div>   

    <div className="af">
        <img src="/images/af.jpg" alt="af" />
    </div> 

  <div className="airport__info">
    <div className="airport__time">El Venizelos Airport, Athens ATH<span> 21:50</span></div>
    <div className="airport__images">
      <div className="dot__img">
        <img src="/images/dot.png" alt="location" />
      </div>
      <div className="location__img">
        <img src="/images/location.png" alt="location" />    
      </div>
    </div> 

        <div className="flight__time_info">
            <img src="/images/grey_plane.svg" alt="plane" />
            <span className="grey__text"> 3hours, 15mins</span>
        </div>

  <div className="content__half_past">
    <div className="airport__time airport__time_night-time">Paris Charles de Gaulle International Airport CDG +1</div>
    <div className="time__time">03:40</div>
  </div>
  
  </div>

  <div className="pluses__plane">
    <div className="item__plus">
      <img className="icon__plus" src="/images/plug_in.svg" alt="plug in" />
      <div className="grey__text_light">Power outlet in the seat</div>
    </div>
    <div className="item__plus">
      <img className="icon__plus" src="/images/fork_knife.svg" alt="plug in" />
      <div className="grey__text_light">Power outlet in the seat</div>
    </div>
    <div className="item__plus">
      <img className="icon__plus" src="/images/wifi.svg" alt="plug in" />
      <div className="grey__text_light">Power outlet in the seat</div>
    </div>
  </div>

    <div className="rules rule__pluses">
      <li className="rule">1 STOP 1 hour 35 minute   Stay Paris(CDG)</li>
      <div className="rule__red">Overnight Connection Long Connection</div>
    </div>

    <div className="canada">
        <img src="/images/canada.jpg" alt="canada" />
    </div>

    <div className="airport__info">
    <div className="content__half_past">
    <div className="airport__time airport__time_night-time">Paris Charles de Gaulle International Airport CDG +1</div>
    <div className="time__time">05:15</div>
  </div>
    <div className="airport__images">
      <div className="dot__img">
        <img src="/images/dot.png" alt="location" />
      </div>
      <div className="location__img">
        <img src="/images/location.png" alt="location" />    
      </div>
    </div> 

        <div className="flight__time_info">
            <img src="/images/grey_plane.svg" alt="plane" />
            <span className="grey__text"> 11hours, 40mins</span>
        </div>

  <div className="content__half_past">
    <div className="airport__time airport__time_night-time">Los Angeles International Airport (Lax)</div>
    <div className="time__time">15:20</div>
  </div>
 </div>

  <div className="pluses__plane">
    <div className="item__plus">
      <img className="icon__plus" src="/images/plug_in.svg" alt="plug in" />
      <div className="grey__text_light">Power outlet in the seat</div>
    </div>
    <div className="item__plus">
      <img className="icon__plus" src="/images/fork_knife.svg" alt="plug in" />
      <div className="grey__text_light">Power outlet in the seat</div>
    </div>
    <div className="item__plus">
      <img className="icon__plus" src="/images/wifi.svg" alt="plug in" />
      <div className="grey__text_light">Power outlet in the seat</div>
    </div>
  </div>
  </div>



  <div className={visible ? "details__flight_page mt-120" : "details__flight_page-none"}>

      <div className="outbound">
        <img className="plane__fly" src="/images/plane_fly.svg" alt="fly" />
        <span className='grey__text underline'>Outbound Flight on Wed, 28 June</span>  
      </div>   

    <div className="af">
        <img src="/images/af.jpg" alt="af" />
    </div> 

  <div className="airport__info">
    <div className="airport__time">El Venizelos Airport, Athens ATH<span> 21:50</span></div>
    <div className="airport__images">
      <div className="dot__img">
        <img src="/images/dot.png" alt="location" />
      </div>
      <div className="location__img">
        <img src="/images/location.png" alt="location" />    
      </div>
    </div> 

        <div className="flight__time_info">
            <img src="/images/grey_plane.svg" alt="plane" />
            <span className="grey__text"> 3hours, 15mins</span>
        </div>

  <div className="content__half_past">
    <div className="airport__time airport__time_night-time">Paris Charles de Gaulle International Airport CDG +1</div>
    <div className="time__time">03:40</div>
  </div>
  
  </div>

  <div className="pluses__plane">
    <div className="item__plus">
      <img className="icon__plus" src="/images/plug_in.svg" alt="plug in" />
      <div className="grey__text_light">Power outlet in the seat</div>
    </div>
    <div className="item__plus">
      <img className="icon__plus" src="/images/fork_knife.svg" alt="plug in" />
      <div className="grey__text_light">Power outlet in the seat</div>
    </div>
    <div className="item__plus">
      <img className="icon__plus" src="/images/wifi.svg" alt="plug in" />
      <div className="grey__text_light">Power outlet in the seat</div>
    </div>
  </div>

    <div className="rules rule__pluses">
      <li className="rule">1 STOP 1 hour 35 minute   Stay Paris(CDG)</li>
      <div className="rule__red">Overnight Connection Long Connection</div>
    </div>

    <div className="canada">
        <img src="/images/canada.jpg" alt="canada" />
    </div>

    <div className="airport__info">
    <div className="content__half_past">
    <div className="airport__time airport__time_night-time">Paris Charles de Gaulle International Airport CDG +1</div>
    <div className="time__time">05:15</div>
  </div>
    <div className="airport__images">
      <div className="dot__img">
        <img src="/images/dot.png" alt="location" />
      </div>
      <div className="location__img">
        <img src="/images/location.png" alt="location" />    
      </div>
    </div> 

        <div className="flight__time_info">
            <img src="/images/grey_plane.svg" alt="plane" />
            <span className="grey__text"> 11hours, 40mins</span>
        </div>

  <div className="content__half_past">
    <div className="airport__time airport__time_night-time">Los Angeles International Airport (Lax)</div>
    <div className="time__time">15:20</div>
  </div>
 </div>

  <div className="pluses__plane">
    <div className="item__plus">
      <img className="icon__plus" src="/images/plug_in.svg" alt="plug in" />
      <div className="grey__text_light">Power outlet in the seat</div>
    </div>
    <div className="item__plus">
      <img className="icon__plus" src="/images/fork_knife.svg" alt="plug in" />
      <div className="grey__text_light">Power outlet in the seat</div>
    </div>
    <div className="item__plus">
      <img className="icon__plus" src="/images/wifi.svg" alt="plug in" />
      <div className="grey__text_light">Power outlet in the seat</div>
    </div>
  </div>
  </div>

        <div className="view__fare_options">
          <img src="/images/pare.svg" alt="pare icon" />
          <button className="pare__button_options" onClick={() => setVisible(!visible)}>View Fare Options</button>
        </div>

      </>
    )
}
