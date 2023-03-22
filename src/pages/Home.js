import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import StockMaterialsLists from '../components/MatrialList';
import { filterCompany } from '../components';
import style from '../style/Home.module.css';

const Home = () => {
  const navigate = useNavigate();
  const stockMaterials = useSelector((store) => store.stockMaterials);
  const [stockMaterial, setStockMaterial] = useState([]);

  useEffect(() => {
    setStockMaterial(stockMaterials);
  }, [stockMaterials]);

  const handleSelection = (company) => {
    const filtered = filterCompany(company, stockMaterials);
    setStockMaterial(filtered);
  };

  const handleSearch = (text) => {
    const filtereComp = stockMaterials.filter((ex) => ex.companyName.toLowerCase().includes(text));
    setStockMaterial(filtereComp);
  };

  const showStockDetails = (id) => {
    const item = stockMaterials.filter((material) => material.symbol === id);
    navigate('/details', { state: item[0] });
  };

  return (
    <div className={style.homeContainer}>
      <div className={style.homeHederBackground}>
        <div className={style.homeHeder}>
          <h1 className={style.homeTitle}>Companies</h1>
          <input className={style.homeInput} type="text" onChange={(e) => handleSearch(e.target.value)} placeholder="search companies" />
          <form>
            <select className={style.homeform} id="companies" name="companies" onChange={(e) => handleSelection(e.target.value)}>
              <option value="Select A Company">Select A Company</option>
              <option value="allCompanies">All Companies</option>
              <option value="AppleInc">Apple Inc</option>
              <option value="NvidiaCorporation">Nvidia Corporation</option>
              <option value="BroadcomInc">Broadcom Inc</option>
              <option value="ASMLHolding">ASML Holding</option>
              <option value="AdobeInc">Adobe Inc</option>
              <option value="TexasInstrumentsIncorporated">Texas Instruments Incorporated</option>
              <option value="AdvancedMicroDevicesInc">Advanced Micro Devices Inc</option>
              <option value="QualcommIncorporated">Qualcomm Incorporated</option>
              <option value="IntuitInc">Intuit Inc</option>
              <option value="AnalogDeviceInc">Analog Device Inc</option>
              <option value="LamResearchCorppration">Lam Research Corppration</option>
              <option value="MicronTechnologyINC">MicronTechnologyINC</option>
              <option value="PaloAltoNetworksINC">PaloAltoNetworksINC</option>
              <option value="SynopsysInc">SynopsysInc</option>
              <option value="otherCompanies">Other Companies</option>
            </select>
          </form>
        </div>
      </div>
      <div className={style.materialListContainer}>
        {stockMaterial.map((stockScreener) => (
          <StockMaterialsLists
            key={stockScreener.symbol}
            stockScreener={stockScreener}
            showStockDetails={showStockDetails}
          />
        ))}
      </div>
      <div>
        <span className={style.homeFooter}>Stock Screener Copywrite Mohammad Rafi Amin</span>
      </div>
    </div>
  );
};

export default Home;
