import React from 'react';
import { render } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
/* import '@testing-library/jest-dom'; */
import { Provider } from 'react-redux';
import userReducer from './stockScreener';

export default function renderProvider(
  ui,
  {
    preloadedState = {},
    store = configureStore({
      reducer: { stockMaterials: userReducer },
      preloadedState,
    }),
    ...renderOptions
  } = {},
) {
  // eslint-disable-next-line
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return {
    store,
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
  };
}
