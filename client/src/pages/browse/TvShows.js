import React from "react";
import requests from "../../requests/requests";

import Navbar from "../../components/browse/navbar/Navbar";
import Banner from "../../components/browse/Banner";
import List from "../../components/browse/List";
import Footer from "../../components/Footer";

const TvShows = () => {
  return (
    <>
      <Navbar />
      <Banner fetchURL={requests.fetchAiringTodayTvShows} />
      <List title='Popular Tv Shows' fetchURL={requests.fetchPopularTvShows} />
      <List title='Top Rated Tv Shows' fetchURL={requests.fetchTopRatedTvShows} />
      <Footer />
    </>
  )
}

export default TvShows;