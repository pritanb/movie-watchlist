import React from "react";
import requests from "../../requests/requests";

import Navbar from "../../components/browse/navbar/Navbar";
import Banner from "../../components/browse/Banner";
import List from "../../components/browse/List";
import Footer from "../../components/Footer";

const Movies = () => {
  return (
    <>
      <Navbar />
      <Banner fetchURL={requests.fetchPopularMovies} />
      <List title='Popular Movies' fetchURL={requests.fetchPopularMovies} />
      <List title='Top Rated Movies' fetchURL={requests.fetchTopRatedMovies} />
      <List title='Action Movies' fetchURL={requests.fetchActionMovies} />
      <List title='Comedy Movies' fetchURL={requests.fetchComedyMovies} />
      <List title='Horror Movies' fetchURL={requests.fetchHorrorMovies} />

      <Footer />
    </>
  )
}

export default Movies;