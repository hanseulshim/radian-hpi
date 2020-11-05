import axios from 'axios'

const URL = 'https://7kx94vle1a.execute-api.us-east-1.amazonaws.com/dev'

interface Form {
  industry: string
  locationType: string
  location: string
  attribute: string
  role: string
  usesIndexTool: boolean
}

interface Location {
  location: string
  type: string
}

interface HpiBody {
  startDate: string | null
  endDate: string | null
  range: string | null
  locations: Location[]
}

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

export const generateWizard = async (form: Form) => {
  try {
    const result = await axios.post(`${URL}/wizard/generate`, {
      industry: form.industry,
      location: form.location,
      attribute: form.attribute,
      role: form.role,
      hpi: form.usesIndexTool
    })
    return result.data
  } catch (error) {
    console.log(error)
  }
}

export const dashboardLocations = async (form: Form) => {
  try {
    const result = await axios.post(`${URL}/dashboard/location`, {
      attribute: form.attribute,
      location: form.location
    })
    return result.data
  } catch (error) {
    console.log(error)
  }
}

export const dashboardGeo = async (form: Form) => {
  try {
    const result = await axios.post(`${URL}/dashboard/geo`, {
      attribute: form.attribute,
      location: form.location
    })
    return result.data
  } catch (error) {
    console.log(error)
  }
}

export const dashboardHpiStock = async (locations: Location[]) => {
  try {
    const result = await axios.post(`${URL}/dashboard/hpi-stock`, {
      locations
    })
    return result.data
  } catch (error) {
    console.log(error)
  }
}

export const dashboardAhpaStock = async (locations: Location[]) => {
  try {
    const result = await axios.post(`${URL}/dashboard/ahpa-stock`, {
      locations
      })
    return result.data
  } catch (error) {
    console.log(error)
  }
}

export const dashboardHpi = async (payload: HpiBody) => {
  try {
    const result = await axios.post(`${URL}/dashboard/hpi`, {
      ...payload
    })
    return result.data
  } catch (error) {
    console.log(error)
  }
}
