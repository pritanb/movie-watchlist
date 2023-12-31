const API_KEY = 'ba294511bdf2ec831406bdf7d2a8f466'

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
	fetchTrendingToday: `/trending/all/day?api_key=${API_KEY}&language=en-US`,
	fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123`,

	fetchPopularMovies: `/movie/popular?api_key=${API_KEY}&language=en-US`,
	fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	fetchUpcomingMovies: `/movie/upcoming?api_key=${API_KEY}&language=en-US`,
	fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
	fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
	fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
	fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
	fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,

	fetchAiringTodayTvShows: `/tv/airing_today?api_key=${API_KEY}&language=en-US`,
	fetchPopularTvShows: `/tv/popular?api_key=${API_KEY}&language=en-US`,
	fetchTopRatedTvShows: `/tv/top_rated?api_key=${API_KEY}&language=en-US`,
	fetchComedyTvShows: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
	fetchRomanceTvShows: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
	fetchDramaTvShows: `/discover/tv?api_key=${API_KEY}&with_genres=18`,
}

export default requests