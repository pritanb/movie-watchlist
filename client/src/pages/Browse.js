import React from "react";
import requests from "../requests/requests";

import Navbar from "../components/browse/navbar/Navbar";
import Banner from "../components/browse/Banner";
import List from "../components/browse/List";

const Browse = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <List title='Trending Now' fetchURL={requests.fetchTrending}/>

    </>
  )
}

export default Browse;