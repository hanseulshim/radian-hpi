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

interface chartParams {
  startDate: Date | null
  endDate: Date | null
  range: string | null
  cohorts: string[]
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

export const cohortSearch = async (geoSearch: string) => {
  try {
    const result = await axios.post(`${URL}/cohort-search`, {
      geoSearch,
      filterType: 'startsWith'
    })
    return result.data
  } catch (error) {
    console.log(error)
  }
}

export const dashboardHpiStock = async (cohorts: string[]) => {
  try {
    const result = await axios.post(`${URL}/hpi-stock`, {
      cohorts
    })
    return result.data
  } catch (error) {
    console.log(error)
  }
}

export const dashboardAhpaStock = async (cohorts: string[]) => {
  try {
    const result = await axios.post(`${URL}/ahpa-stock`, {
      cohorts
    })
    return result.data
  } catch (error) {
    console.log(error)
  }
}

export const dashboardDonut = async (cohorts: string[]) => {
  try {
    const result = await axios.post(`${URL}/donut`, {
      cohorts
    })
    return result.data
  } catch (error) {
    console.log(error)
  }
}

export const dashboardIndicator = async (cohorts: string[]) => {
  try {
    const result = await axios.post(`${URL}/indicator`, {
      cohorts
    })
    return result.data
  } catch (error) {
    console.log(error)
  }
}

export const dashboardHpi = async (payload: chartParams) => {
  try {
    const result = await axios.post(`${URL}/hpi-chart`, {
      ...payload
    })
    return result.data
  } catch (error) {
    console.log(error)
  }
}

export const dashboardAhpa = async (payload: chartParams) => {
  try {
    const result = await axios.post(`${URL}/ahpa-chart`, {
      ...payload
    })
    return result.data
  } catch (error) {
    console.log(error)
  }
}
