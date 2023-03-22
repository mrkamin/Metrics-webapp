import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/store';
import Home from '../pages/Home';
import renderProvider from '../redux/Stock-Screener/stockScreener-test';

it('snapshots', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Router>
          <Home />
        </Router>
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('testing the heading inside home component', async () => {
  renderProvider(
    <Router>
      <Home />
    </Router>,
  );
  expect(screen.getByText(/Select A Company/i)).toBeInTheDocument();
});
