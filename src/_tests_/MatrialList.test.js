import { configureStore } from '@reduxjs/toolkit';
import axios from 'axios';
import reducer, { fetchStockMaterial } from '../redux/Stock-Screener/stockScreener';

// Testing the reducers
test('should return the initial state', () => {
  expect(reducer()).toEqual([]);
});

test('should handle an array of stockMaterials added to the state', () => {
  const previousState = [];
  const action = { type: 'stockScreener/GET__ALL__STOCK__MATERIAL/fulfilled', payload: [{ symbol: 'AAPL', companyName: 'Apple Inc.', company: 'Nvidia Corporation' }] };

  expect(reducer(previousState, action)).toEqual([
    { symbol: 'AAPL', companyName: 'Apple Inc.', company: 'Nvidia Corporation' },
  ]);
});

// Testing the action creators.
describe('shoud dispatch get all stockMaterials action', () => {
  it('should pass', async () => {
    const ENDPOINT_URL = 'https://financialmodelingprep.com/api/v3/stock-screener?marketCapMoreThan=1000000000&betaMoreThan=1&volumeMoreThan=10000&sector=Technology&exchange=NASDAQ&dividendMoreThan=0&limit=100&apikey=a0e9febb7b677f1b9f185cbdc028aea8';
    const stockMaterials = { data: [{ companyName: 'Apple Inc.', company: 'Nvidia Corporation', symbol: 'AAPL' }] };

    const post = jest.spyOn(axios, 'get').mockResolvedValueOnce(stockMaterials);
    const store = configureStore({
      reducer(state = [], action) {
        switch (action.type) {
          case 'stockScreener/GET__ALL__STOCK__MATERIAL/fulfilled':
            return action.payload;
          default:
            return state;
        }
      },
    });
    await store.dispatch(fetchStockMaterial());
    expect(post).toBeCalledWith(ENDPOINT_URL);
    const state = store.getState();
    expect(state).toEqual([{ symbol: 'AAPL', companyName: 'Apple Inc.', company: 'Nvidia Corporation' }]);
  });
});
