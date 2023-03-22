import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import filterObjectsById from '../../components';
import { allCompanies } from '../../pages';

const ENDPOINT_URL = 'https://financialmodelingprep.com/api/v3/stock-screener?marketCapMoreThan=1000000000&betaMoreThan=1&volumeMoreThan=10000&sector=Technology&exchange=NASDAQ&dividendMoreThan=0&limit=100&apikey=a0e9febb7b677f1b9f185cbdc028aea8';

/* ACTION TYPE */

const GET__ALL__STOCK__MATERIAL = 'stockScreener/GET__ALL__STOCK__MATERIAL';

/* REDICER */

const initialState = [];
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case `${GET__ALL__STOCK__MATERIAL}/pending`:
      return state;
    case `${GET__ALL__STOCK__MATERIAL}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
}

/* ACTION CREATERS */

export const fetchStockMaterial = createAsyncThunk(GET__ALL__STOCK__MATERIAL,
  async () => {
    const data = await axios.get(ENDPOINT_URL);
    /* return data.data; */
    const newObj = filterObjectsById(data.data, allCompanies);

    return newObj;
  });
