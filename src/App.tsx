import React from 'react';
import { PopularMovies } from './components';

/**
 * @function App
 * @returns React.JSX.Element
 * @author Sunil Dhakal
 */

const App = (): React.JSX.Element => {
  return (
    <PopularMovies />
  );
};

export default React.memo(App);
