import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Trips} from '../../components/Trips';
import usePagination from '../../hooks/usePagination';

import {BsChevronRight, BsChevronLeft} from 'react-icons/bs';

import './TabPages.css'

export const Pending = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    gaps,
    setPage,
    totalPages,
  } = usePagination({
    contentPerPage: 4,
    count: cart.length,
  });

  useEffect(() => {
    (async () => {
      try {
        const data = await axios.get("https://61d1e66cda87830017e5938e.mockapi.io/api/users/users");
        setCart(data.data);
      } catch {
        setError(true);
      } finally {
        setLoading(false); 
      }
    })();
  }, []);

  return (
    <>
    <Trips />

        <div className="tabs__content">
          <div className="search__by">
            <span>Search by Passenger</span>
          </div>
          <div className="total__count">Total Offers: <span className="color__blue_fw500">2</span></div>
      
      {loading ? (
        <h2 className="loading__h2">Loading...</h2>
      ) : error ? (
        <h2>Error fetching users</h2>
      ) : (
        
        <div className="pagination">
        <div className="items">
            {cart
              .slice(firstContentIndex, lastContentIndex)
              .map((el) => (
              <div className="tab__item_pag">
               <div className="tab__item_content">
                 <div className="tab__context">
                   <div className="tab__item_info">{el.askText} <span>{el.answerText}</span></div>
                   <div className="tab__item_info">{el.askText2} <span>{el.answerText2}</span></div>
                   <div className="tab__item_info">{el.askText3}<span>{el.answerText3}</span></div>
                   <div className="tab__item_info">{el.askText4} <span>{el.answerText4}</span></div>
                   <div className="tab__item_info mt-30">{el.currentState}</div>
                 </div>
                 <img className="tab__eye_icon" src="/images/watch__info_user.svg" alt="icon eye" />
               </div>
               <div className="tab__marking_offer bg__orange"><span>Pending</span></div>
              </div>
              ))}
          </div>
          <div className="view__pages">
            <span className="grey__text">view </span>
            <span className="current__view_page"> {page} </span>
            <span className="grey__text"> of 35 results</span>
          </div>
          
          <div className="pagination__settings">
            
            <button
              onClick={prevPage}
              className="page arrow__movement"
            >
              <BsChevronLeft />
            </button>
            <button
              onClick={() => setPage(1)}
              className={`page ${page === 1 ? "active" : ""}`}
            >
              1
            </button>
            {/* <button className="page">{gaps.before ? "..." : "..."}</button>  */}

            {gaps.paginationGroup.map((el) => (
              <button
                onClick={() => setPage(el)}
                key={el}
                className={`page ${page === el ? "active" : ""}`}
              >
                {el}
              </button>
            ))}
            <button className="page__dots">{gaps.after ? "..." : "..."}</button>
             
            <button
              onClick={nextPage}
              className="page arrow__movement"
            >
              <BsChevronRight className=""/>
            </button>
          </div>
        </div>
      )}
        </div>
  </>
  );

}