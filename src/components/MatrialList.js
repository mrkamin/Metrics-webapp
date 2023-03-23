import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import style from '../style/MatrialList.module.css';

const StockMaterialsLists = ({ stockScreener, showStockDetails }) => {
  const {
    symbol, companyName, marketCap,
  } = stockScreener;

  return (
    <div className={style.materialLists}>
      <div>
        <p className={style.companyName}>{companyName}</p>
        <p className={style.companyMarketCap}>{marketCap}</p>
      </div>
      <FontAwesomeIcon className={style.detailIcon} type="button" onClick={() => showStockDetails(symbol)} icon={faArrowRight} />
    </div>
  );
};

StockMaterialsLists.propTypes = {
  stockScreener: PropTypes.oneOfType([PropTypes.object]).isRequired,
  showStockDetails: PropTypes.func.isRequired,
};

export default StockMaterialsLists;
