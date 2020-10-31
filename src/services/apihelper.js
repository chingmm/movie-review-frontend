import axios from 'axios';

const token = '979f8705d5834a0583fe2812dad73f65';
const base = 'https://api.themoviedb.org/3/';
const imageBase = 'https://image.tmdb.org/t/p/';


export const getSearchedInfo = async (viewType, search) => {
    const res = await axios.get(`${base}search/${viewType}?api_key=${token}&query=${search}&language=en-US`)
    return res.data
  }

  export const getPoster = async (posterSize, posterLink) => {
    const res = await axios.get(`${imageBase}${posterSize}${posterLink}`)
    return res.data
  }

  export const getMovie = async (id) => {
    const res = await axios.get(`${base}movie/${id}?api_key=${token}&language=en-US`)
    return res.data
  }