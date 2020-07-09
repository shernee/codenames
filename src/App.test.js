import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './Trivia';

afterEach(cleanup)

test ('take a snapshot', () => {
  const { asFragment } = render(<App/>)

  expect(asFragment(<App/>)).toMatchSnapshot()
});