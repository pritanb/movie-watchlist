import React from "react";
import requests from "../requests/requests";

import Navbar from "../components/browse/navbar/Navbar";
import Banner from "../components/browse/Banner";
import List from "../components/browse/List";
import Footer from "../components/Footer";

const Browse = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <List title='Trending Now' fetchURL={requests.fetchTrending}/>
      <List title='Top Rated Movies' fetchURL={requests.fetchTopRatedMovies}/>
      <List title='Top Rated Tv Shows' fetchURL={requests.fetchTopRatedTvShows}/>
      <Footer />
    </>
  )
}

export default Browse;