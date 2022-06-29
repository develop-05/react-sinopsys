import {useState} from 'react'

import '../../components.css';
import './WatchList.css';

export const WatchList = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      {/* <button classsName="watch__user_info" onClick={() => setVisible(!visible)}> */}
        <img
          className="watch__user_info_img" 
          src="/images/watch__info_user.svg"
          alt="watch icon"
          onClick={() => setVisible(!visible)}
        />
      {/* </button> */}

  <div className={visible ? "overlay" : ""}>
    <form className={visible ? "watch__travel_info-visible" : "watch__travel_info"}>
      <h3 className="popup__title mt-10">Traveler Information</h3>
      <span onClick={() => setVisible(!visible)} className="close close__popup">+</span>
      <div className="inputs__info">

      <div>
        <input className="watch__list_item" type="text" />
        <div className="watch__input_label" htmlFor="">SURNAME</div>
      </div>

      <div>
        <input className="watch__list_item" type="text" />
        <div className="watch__input_label" htmlFor="">FIRST NAME</div>
      </div>

      <div>
        <input className="watch__list_item" type="text" />
        <div className="watch__input_label" htmlFor="">MIDDLE NAME</div>
      </div>

      <div>
        <input className="watch__list_item" type="text" />
        <div className="watch__input_label" htmlFor="">DATE OF BIRTH</div>
      </div>

      <div>
        <input className="watch__list_item" type="text" />
        <div className="watch__input_label" htmlFor="">NATIONALITY</div>
      </div>

      <div>
        <input className="watch__list_item" type="text" />
        <div className="watch__input_label" htmlFor="">GENDER</div>
      </div>

      <div>
        <input className="watch__list_item" type="text" />
        <div className="watch__input_label" htmlFor="">PASSPORT</div>
      </div>

      <div>
        <input className="watch__list_item" type="text" />
        <div className="watch__input_label" htmlFor="">EXP. DATE</div>
      </div>

        <div className="form__buttons">
          <input type="submit" value="Remove" className="btn__travel_watch red"/>
          <input type="submit" value="Close" className="btn__travel_watch grey"/>
       </div>
      </div>
    </form>
  </div>
</>
  )
}
