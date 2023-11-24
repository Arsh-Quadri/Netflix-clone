const key = "c2828c0349f566a44f88a84981a1569e"

const requests = {
    requestsPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}`,
    requestsTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`,
    requestsHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=horror`,
    requestsTrending: `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`,
    requestsUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}`,
    requestsTopAiring: `https://api.themoviedb.org/3/tv/popular?api_key=${key}`
}

export default requests
