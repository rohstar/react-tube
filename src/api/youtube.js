//add restriction URL 
import axios from 'axios'

const KEY = 'AIzaSyBsbLtqcMTprMRIR4u66Q-DUCTVqgJX-8k'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
    type: 'video'
  }
})