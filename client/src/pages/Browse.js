import React from "react";
import requests from "../requests/requests";

import Navbar from "../components/browse/navbar/Navbar";
import List from "../components/browse/List";

const Browse = () => {
  return (
    <>
      <Navbar />
      <div className="py-24">
        <List title='Trending Now' fetchURL={requests.fetchTrending}/>
      </div>
    </>
  )
}

export default Browse;