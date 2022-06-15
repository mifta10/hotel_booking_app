import React from 'react';
import { useSelector } from 'react-redux';
import TopNav from '../TopNav/TopNav';

const Home = () => {
  const {user} = useSelector((state) => ({...state}))
  return (
    <div>
    <div className="container-fluid">
      <h1 className="text-center p-5">Home Page{JSON.stringify(user)}</h1>
    </div>
    </div>
  );
};

export default Home;