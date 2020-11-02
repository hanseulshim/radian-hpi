import axios from 'axios'

const URL = 'https://7kx94vle1a.execute-api.us-east-1.amazonaws.com/dev'

export const acceptCookies = async () => {
  try {
    const result = await axios.post(`${URL}/wizard/cookie`, {
      cookie: true
    })
    return result.data
  } catch (error) {
    console.log(error)
  }
}

export const getWizardLocations = async (location: string) => {
  try {
    const result = await axios.post(`${URL}/wizard/location`, {
      location: location
    })
    return result.data
  } catch (error) {
    console.log(error)
  }
}
