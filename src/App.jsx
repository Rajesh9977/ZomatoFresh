  import React from 'react'
  import Header from '../components/Header'
  import RestaurantContainer from '/components/RestaurantContainer'
  import { Outlet } from 'react-router-dom';

  function App() {
    return (
      <div>
        <Header/>
        <Outlet/>
        <h1 className=""></h1>
      </div>
    )
  };

  export default App;
