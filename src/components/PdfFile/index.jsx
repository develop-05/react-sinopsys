import {useState} from 'react'
import { Link } from 'react-router-dom';

import './PdfFile.css';

export const PdfFile = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <button className="travel__docs" onClick={() => setVisible(!visible)}>
        <img classNam="pdf__docs_icon" src="/images/install.svg" alt="install icon" /> Travel Docs
      </button>
              <div className={visible ? "overlay" : ""}>
                <div className="popup__center">
                <form className={visible ? "watch__travel_info-visible" : "watch__travel_info"}>
                  <h3 className="popup__title">Travel Docs</h3>
                  <span onClick={() => setVisible(!visible)} className="close close__mt">+</span>
                  <div className="inputs__info pdflist">

                    <div className="pdf__item">
                      <Link className="pdf__href" to="/">Encrypted PDF File sample.pdf</Link>
                    </div>

                    <div className="pdf__item">
                      <Link className="pdf__href" to="/">Encrypted PDF File sample.pdf</Link>
                    </div>

                    <div className="pdf__item">
                      <Link className="pdf__href" to="/">Encrypted PDF File sample.pdf</Link>
                    </div>

                    <div className="pdf__item">
                      <Link className="pdf__href" to="/">Encrypted PDF File sample.pdf</Link>
                    </div>

                    <div className="pdf__item">
                      <Link className="pdf__href" to="/">Encrypted PDF File sample.pdf</Link>
                    </div>

                    <div className="pdf__item">
                      <Link className="pdf__href" to="/">Encrypted PDF File sample.pdf</Link>
                    </div>

                    <div className="form__buttons">
                      <input type="submit" value="Close" onClick={() => setVisible(!visible)} className="btn__travel_watch grey"/>
                   </div>
                  </div>
                </form>
                </div>
              </div> 
    </>
  )
}


export const PdfFile2 = () => {

  const [visible, setVisible] = useState(false);
  return (
  <>
    <button type="submit" onClick={() => setVisible(!visible)} className="purple"><img className="pdf__docs_icon" src="/images/install_white.svg" alt="" /> Travel Docs</button>
          <div className={visible ? "overlay" : ""}>
                <form className={visible ? "watch__travel_info-visible" : "watch__travel_info"}>
                  <h3 className="popup__title">Travel Docs</h3>
                  <span onClick={() => setVisible(!visible)} className="close close__mt">+</span>
                  <div className="inputs__info pdflist">

                    <div className="pdf__item">
                      <Link className="pdf__href" to="/">Encrypted PDF File sample.pdf</Link>
                    </div>

                    <div className="pdf__item">
                      <Link className="pdf__href" to="/">Encrypted PDF File sample.pdf</Link>
                    </div>

                    <div className="pdf__item">
                      <Link className="pdf__href" to="/">Encrypted PDF File sample.pdf</Link>
                    </div>

                    <div className="pdf__item">
                      <Link className="pdf__href" to="/">Encrypted PDF File sample.pdf</Link>
                    </div>

                    <div className="pdf__item">
                      <Link className="pdf__href" to="/">Encrypted PDF File sample.pdf</Link>
                    </div>

                    <div className="pdf__item">
                      <Link className="pdf__href" to="/">Encrypted PDF File sample.pdf</Link>
                    </div>

                    <div className="form__buttons">
                      <input onClick={() => setVisible(!visible)} type="submit" value="Close" className="btn__travel_watch grey"/>
                   </div>
                  </div>
                </form>
              </div>
    </>
  )
}