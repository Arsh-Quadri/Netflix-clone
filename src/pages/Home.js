import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../components/Request'

const Home = () => {
    return (
        <div>

            <Main />
            <Row rowID='1' title="Up coming" fetchURL={requests.requestsUpcoming} />
            <Row rowID='4' title="Top rated" fetchURL={requests.requestsTopRated} />
            <Row rowID='2' title="Popular" fetchURL={requests.requestsPopular} />
            <Row rowID='5' title="Horror" fetchURL={requests.requestsHorror} />
            <Row rowID='3' title="Trending" fetchURL={requests.requestsTrending} />
            <Row rowID='6' title="Airing on top" fetchURL={requests.requestsTopAiring} />
        </div>
    )
}

export default Home