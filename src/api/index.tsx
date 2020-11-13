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

interface Geo {
  location: string
  type: string
}

interface chartParams {
  startDate: Date | null
  endDate: Date | null
  range: string | null
  locations: Geo[]
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

export const getWizardLocations = async (payload: {
  geo: string
  searchString: string
}) => {
  try {
    let geoType
    if (payload.geo === 'Region') {
      geoType = 'Regions ' + payload.geo.toLowerCase()
    } else {
      geoType = payload.geo.toLowerCase()
    }
    const result = await axios.post(`${URL}/geo`, {
      geoType,
      geoSearch: payload.searchString,
      filterType: 'startsWith'
    })
    return result.data
  } catch (error) {
    console.log(error)
  }
}

export const generateWizard = async (form: Form) => {
  try {
    const result = await axios.post(`${URL}/generate`, {
      industry: form.industry,
      geoType: form.locationType,
      geo: form.location,
      attributeGroup: form.attribute,
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

export const dashboardDonut = async (locations: Location[]) => {
  try {
    const result = await axios.post(`${URL}/dashboard/donut`, {
      locations
    })
    return result.data
  } catch (error) {
    console.log(error)
  }
}

export const dashboardIndicator = async (locations: Location[]) => {
  try {
    const result = await axios.post(`${URL}/dashboard/indicator`, {
      locations
    })
    return result.data
  } catch (error) {
    console.log(error)
  }
}

export const dashboardHpi = async (payload: chartParams) => {
  try {
    const result = await axios.post(`${URL}/dashboard/hpi`, {
      ...payload
    })
    return result.data
  } catch (error) {
    console.log(error)
  }
}

export const dashboardAhpa = async (payload: chartParams) => {
  try {
    const result = await axios.post(`${URL}/dashboard/ahpa`, {
      ...payload
    })
    return result.data
  } catch (error) {
    console.log(error)
  }
}
