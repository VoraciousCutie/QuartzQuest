import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import Home from '@pages/Home/Home';
import Placeholder from '@pages/Placeholder/Placeholder';


const Routes = () => (
  <Switch>
    <Route path="/" element={<Home />} />
    <Route path="/Placeholder" element={<Placeholder />} />
  </Switch>
);

export default Routes;