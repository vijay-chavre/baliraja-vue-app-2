
import axios from "axios"
const url = 'http://localhost:3000/posts'
export const getAllPosts = async () => {
  try {
    
    const res = await axios.get(url)
    return res
  } catch (error) {
    throw new Error('Could not find data')
  }
}