//add restriction URL 
import axios from 'axios'
import youtubeKey from '../env'

const KEY = youtubeKey

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
    type: 'video'
  }
})