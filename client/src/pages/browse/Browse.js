import React from "react";
import requests from "../../requests/requests";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/browse/navbar/Navbar";
import Banner from "../../components/browse/Banner";
import List from "../../components/browse/List";
import Footer from "../../components/Footer";

const Browse = () => {
  return (
    <>
      <Navbar />
      <Banner fetchURL={requests.fetchTrendingToday} />
      <List title='Trending Now' fetchURL={requests.fetchTrending} />
      <List title='Netflix Originals' fetchURL={requests.fetchNetflixOriginals} />
      <List title='Top Rated Movies' fetchURL={requests.fetchTopRatedMovies} />
      <List title='Top Rated Tv Shows' fetchURL={requests.fetchTopRatedTvShows} />
      <List title='Documentaries' fetchURL={requests.fetchDocumentaries} />
      <Footer />
      <Outlet />
    </>
  )
}

export default Browse;