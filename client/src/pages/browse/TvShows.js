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
      <List title='Action Tv Shows' fetchURL={requests.fetchComedyTvShows} />
      <List title='Romance Tv Shows' fetchURL={requests.fetchRomanceTvShows} />
      <List title='Drama Tv Shows' fetchURL={requests.fetchDramaTvShows} />
      <Footer />
    </>
  )
}

export default TvShows;