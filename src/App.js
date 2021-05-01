import './App.css'
import requests from './requests';
import Row from './Row'
import Banner from './Banner'
import Nav from './Nav'

function App() {
  return (
    <div className="app">
      <Nav />

    <Banner />

      <Row title="NETFLIX ORIGINAL" fetchUrl = {requests.fetchNetflixOriginals} isLargerRow/>
      <Row title="Top Rated" fetchUrl = {requests.fetchTopRated}/>
      <Row title="Trending Now" fetchUrl = {requests.fetchTrending}/>
      <Row title="Action Movies" fetchUrl = {requests.fetchActionMovies}/>
      <Row title="Honore Movies" fetchUrl = {requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl = {requests.fetchRomanceMovies}/>
      <Row title="Comedy Movies" fetchUrl = {requests.fetchComedyMovies}/>
      <Row title="Documentary Movies" fetchUrl = {requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
