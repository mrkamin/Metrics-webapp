import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store';
import Details from '../pages/Details';
import renderProvider from '../redux/Stock-Screener/stockScreener-test';

const mockHistory = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistory,
  }),
  useLocation: () => ({
    pathname: '/details',
    state: { companyName: 'Apple Inc.' },
  }),
}));

it('snapshots', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <BrowserRouter>
          <Details />
        </BrowserRouter>
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('testing the heading inside Details component', async () => {
  renderProvider(
    <BrowserRouter>
      <Details />
    </BrowserRouter>,
  );

  expect(screen.getByText(/Stock Screener Details/i)).toBeInTheDocument();
  expect(screen.getByText(/Apple Inc./i)).toBeInTheDocument();
});
