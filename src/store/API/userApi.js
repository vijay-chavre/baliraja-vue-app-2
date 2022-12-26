
import axios from "axios"
const url = 'http://localhost:3000/users'
export const getAllUsers = async () => {
  try {
    
    const res = await axios.get(url)
    return res
  } catch (error) {
    throw new Error('Could not find Users')
  }
}

export const addUsers = async (formData) => {
  try {
    
    const res = await axios.post(url, {
      ...formData
    })
    return res
  } catch (error) {
    throw new Error('Could not find Users')
  }
}