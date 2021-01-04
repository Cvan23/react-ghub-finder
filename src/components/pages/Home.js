import React, { Fragment } from 'react';
import Search from '../users/Search';
import Users from '../users/Users';
import gcat from './gcat.png';

const Home = () => (
  <Fragment>
    <Search />
    <Users />
    <img src={gcat} alt="Octocat!" />
  </Fragment>
);

export default Home;