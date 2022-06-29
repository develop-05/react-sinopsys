import {useState, useCallback} from 'react';
import Drawer from "react-bottom-drawer";
import {NavLink, Link} from 'react-router-dom';
import {RiDashboardFill} from "react-icons/ri";
import {FaFolderOpen, FaPlaneDeparture} from "react-icons/fa"

import './Navigation.css';

export const Navigation = () => {
    const [isVisible, setIsVisible] = useState(false);

    const openDrawer = useCallback(() => setIsVisible(true), []);
    const closeDrawer = useCallback(() => setIsVisible(false), []);

    return (

      <>
      <header className={isVisible ? "header__sino_nav" : "hidden"}>
          <Link to="/dashboard">
            <div className="logo_nav">
                <img className="logo__img_nav" src="images/logo.svg" alt="logo icon" />
            </div>
          </Link>
            <Link to="/request-crew" className="req">
                <div className='req__add_nav'><span>+</span></div>
                <span className="req__text_nav"> New Request</span> 
         </Link>
        
        <div className="img__block_user_nav">
          <img src="/images/user.png" alt="" />
        </div>

          <div className="arrow__up_nav">
            <img className="arrow__up_img_nav" src="/images/arrow_up.svg" alt="arrow up" />
          </div>
            
    </header>


    <div className="navigation">
            <div className="menu__list">

                <div className="menu__list_item">
                  <NavLink to="/dashboard"  className="link__item">
                  <div className="icon">
                    <RiDashboardFill className="nav__icon" />
                  </div>
                    <div><span>Dashboard</span></div>
                  </NavLink>
                </div>

                <div className="menu__list_item">
                  <NavLink to="/" className="link__item">
                  <div className="icon">
                    <FaPlaneDeparture className="nav__icon" />
                </div>
                    <div><span>Trips</span></div>
                  </NavLink>
                </div>

                <div className="menu__list_item">
                  <NavLink to="/offer-crew" className="link__item">
                  <div className="icon">
                    <FaFolderOpen className="nav__icon"/>
                  </div>
                    <div><span>Expenses</span></div>
                  </NavLink>
                </div>

              
                <div className="menu__list_item">
                  <button className="user__btn_nav" onClick={openDrawer}>
                    <div className="icon">
                      <img src="/images/user.png" alt="user icon" />
                    </div>
                    <div className="arrow__up">
                      <img className="arrow__up_img" src="/images/arrow_up.svg" alt="arrow up" />
                    </div>
                  </button>
                </div>
            
            </div>

            <Drawer
              duration={300}
              hideScrollbars={true}
              onClose={closeDrawer}
              isVisible={isVisible}
              className="drawer__backdrop"
            >
              <div className="nav__list">

              <div className="nav__link_item">
                <Link className="nav__link_item-href" to="/dashboard">
                  <img src="/images/dashboard.svg" alt="dashboard" />
                  <div className="nav__link_name"><span>Dashboard</span></div>
                </Link>
              </div>

              <div className="nav__link_item">
                <Link className="nav__link_item-href" to="">
                  <img src="/images/trip.svg" alt="trips" />
                  <div className="nav__link_name"><span>Trips</span></div>
                </Link>
              </div>

              <div className="nav__link_item">
                <Link className="nav__link_item-href" to="">
                  <img src="/images/suitcase.svg" alt="suitcase" />
                  <div className="nav__link_name"><span>Travel Data</span></div>
                </Link>
              </div>

              <div className="nav__link_item">
                <Link className="nav__link_item-href" to="/about-flight">
                  <img src="/images/folder.svg" alt="history" />
                  <div className="nav__link_name"><span>History</span></div>
                </Link>
              </div>

              <div className="nav__link_item">
                <Link className="nav__link_item-href" to="/offer-crew">
                  <img src="/images/folder.svg" alt="dashboard" />
                  <div className="nav__link_name"><span>Menuitem5</span></div>
                </Link>
              </div>

              <div className="nav__link_item">
                <Link className="nav__link_item-href" to="/offer-corporate">
                  <img src="/images/folder.svg" alt="history" />
                  <div className="nav__link_name"><span>Menuitem6</span></div>
                </Link>
              </div>

              <div className="nav__link_item">
                <Link className="nav__link_item-href" to="/request-corporate">
                  <img src="/images/folder.svg" alt="history" />
                  <div className="nav__link_name"><span>Menuitem7</span></div>
                </Link>
              </div>

              <div className="nav__line"></div>

              <div className="log__out">
              <Link to="/login">
                <div className="log__out_content">
                  <img className="power__log_out" src="/images/power.svg" alt="power" />
                  <div className="color__blue"><span>Logout</span></div>
                </div>
              </Link>
              </div>
                
              </div>
            </Drawer>
        </div>
      </>
        
    );
}

