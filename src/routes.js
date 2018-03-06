import Home from './screens/Home';
import MovieDetail from './screens/MovieDetail';
import BookDetail from './screens/BookDetail';
import Settings from './screens/Settings';
import BookPDF from './screens/BookPDF';
import MovieEpisode from './screens/MovieEpisode';
import MediaGrid from './screens/MediaGrid';

export default routes = {
  home: { screen: Home },
  movie_detail: { screen: MovieDetail },
  book_detail: { screen: BookDetail },
  settings: { screen: Settings },
  book_pdf: { screen: BookPDF },
  movie_episode: { screen: MovieEpisode },
  media_grid: { screen: MediaGrid }
}