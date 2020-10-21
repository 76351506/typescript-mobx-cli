/*
 * @Author: heinan
 * @Date: 2020-01-09 10:00:18
 * @Last Modified by:   heinan
 * @Last Modified time: 2020-01-09 10:00:18
 */
import React, { Suspense } from 'react';
import RouterView from '@/router';
import { BrowserRouter as Router } from 'react-router-dom';

const App: React.FC = function () {
  return (
    <Suspense fallback={<div>...loading</div>}>
      <Router>
        <RouterView></RouterView>
      </Router>
    </Suspense>
  );
};
export default App;
