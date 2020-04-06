import * as React from 'react';
import { connect } from 'react-redux';
import ProductsList from './ProductsList';
import Highlights from './Highlights';

const Home = () => (
  <div>
    <Highlights/>
    <ProductsList/>
  </div>
);

export default connect()(Home);
