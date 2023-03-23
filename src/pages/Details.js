import React from 'react';
import { useLocation } from 'react-router-dom';
import style from '../style/Details.module.css';

const Details = () => {
  const location = useLocation();
  const {
    symbol, companyName, marketCap, sector,
    industry, beta, price,
    lastAnnualDividend, volume,
    exchange, exchangeShortName,
    country, isEtf, isActivelyTrading,
  } = location.state;

  return (
    <div className={style.homeform}>
      <div className={style.homeHederBackground}>
        <div className={style.homeHeder}>
          <div className={style.detailcompanyName}>CompanyName:</div>
          <div className={style.detailcompanyNameTwo}>
            {companyName}
          </div>
          <span className={style.homeform}>
            MarketCap:
            { marketCap}
          </span>
        </div>
      </div>
      <div className={style.DetailsListContainer}>
        <h2 className={style.homeform}>Stock Screener Details</h2>
        <ul className={style.DetailsUL}>
          <li className={style.DetailsLi}>
            <h4 className={style.homeform}>Sector</h4>
            <p className={style.homeform}>{sector}</p>
          </li>
          <li className={style.DetailsLi}>
            <h4>Industry</h4>
            <p>{industry}</p>
          </li>
          <li className={style.DetailsLi}>
            <h4>Beta</h4>
            <p>{beta}</p>
          </li>
          <li className={style.DetailsLi}>
            <h4>Price</h4>
            <p>{price}</p>
          </li>
          <li className={style.DetailsLi}>
            <h4>LastAnnualDividend</h4>
            <p>{lastAnnualDividend}</p>
          </li>
          <li className={style.DetailsLi}>
            <h4>Exchange</h4>
            <p>{exchange}</p>
          </li>
          <li className={style.DetailsLi}>
            <h4>ExchangeShortName</h4>
            <p>{exchangeShortName}</p>
          </li>
          <li className={style.DetailsLi}>
            <h4>Country</h4>
            <p>{country}</p>
          </li>
          <li className={style.DetailsLi}>
            <h4>IsEtf</h4>
            <p>{isEtf}</p>
          </li>

          <li className={style.DetailsLi}>
            <h4>IsActivelyTrading</h4>
            <p>{isActivelyTrading}</p>
          </li>
          <li className={style.DetailsLi}>
            <h4>symbol</h4>
            <p>{symbol}</p>
          </li>
          <li className={style.DetailsLi}>
            <h4>Volume</h4>
            <p>{volume}</p>
          </li>
        </ul>
      </div>
    </div>

  );
};

export default Details;
