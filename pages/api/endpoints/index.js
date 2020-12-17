import axios from 'axios';
import { lastYear, currentDate, nextYear } from '../../../utils/dates';

class GamesAPI {
  static BASE_URL = 'https://api.rawg.io/api/';
  static upcomingGames = async (limit = 10) => {
    const upcomingURL = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=${limit}`;
    const { data } = await axios.get(`${this.BASE_URL}${upcomingURL}`);
    return data.results;
  };

  static popularGames = async (limit = 10) => {
    const popularURL = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=${limit}`;
    const { data } = await axios.get(`${this.BASE_URL}${popularURL}`);
    return data.results;
  };

  static newGames = async (limit = 10) => {
    const newURL = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=${limit}`;
    const { data } = await axios.get(`${this.BASE_URL}${newURL}`);
    return data.results;
  };
}

export default GamesAPI;
