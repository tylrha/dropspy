import axios from 'axios'

export default async function fetchJsonUrl(url){
  const response = await axios.get(url)
  return response.data
}
